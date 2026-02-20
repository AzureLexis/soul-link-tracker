import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Location, LocationListProvider, RegionOption } from '../../services/location-list-provider';
import { Pokemon, PokemonListProvider } from '../../services/pokemon-list-provider';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule, } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialog } from './confirmation-dialog';
import { SessionDialog } from './session-dialog';
import { webSocket } from 'rxjs/webSocket';




@Component({
  standalone: true,
  selector: 'app-tracker',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    ReactiveFormsModule,
    AsyncPipe,
    FormsModule,
  ],
  templateUrl: './tracker.html',
  styleUrls: ['./tracker.css']
})
export class Tracker {

  private websocketMessageTypeSetHost = 'setHost';
  private websocketMessageTypeSyncRequest = 'syncRequest';
  private websocketMessageTypeStartSession = 'startSession';
  private websocketMessageTypeLoadSession = 'loadSession';
  private websocketMessageTypeResetSession = 'resetSession';
  private websocketMessageTypeAddPlayer = 'addPlayer';
  private websocketMessageTypeRemovePlayer = 'removePlayer';
  private websocketMessageTypeRenamePlayer = 'renamePlayer';
  private websocketMessageTypeChangeRegion = 'changeRegion';
  private websocketMessageTypeCatchPokemon = 'catchPokemon';
  private websocketMessageTypechangePokemonStatus = 'changePokemonStatus';
  private websocketMessageTypePong = 'pong';

  private websocketClient : any = new WebSocket('https://soul-link-tracker-websocket.onrender.com');
  public websocketConnected = false;
  private websocketSessionHost = false;

  public playerName : string = '';
  public locationList : Array<LocationStatus> = [];
  public readonly pokemonList : Array<Pokemon> = [];
  public playerList : Array<Player> = [];
  public pokemonControls: { [key: string]: FormControl<string | Pokemon | null> } = {};
  public selectedRegion = 1;
  public regionList : Array<RegionOption> = [];
  public regionFormControl : FormControl<RegionOption | null>;
  public hideMissed : string= '1';

  constructor(
    private readonly locationListProvider : LocationListProvider,
    private readonly pokemonListProvider : PokemonListProvider,
    private readonly dialog: MatDialog,
    private readonly cdr: ChangeDetectorRef) {
      this.pokemonList = this.pokemonListProvider.getPokemonList();
      this.regionList = this.locationListProvider.getRegions();
      this.regionFormControl = new FormControl(null);
      this.updateRegionList(this.regionFormControl.value);
      this.playerList = this.playerList;
  }

  private connectToWesbocket(uuid : string) {
    this.sendStartSessionMessage(uuid);
    this.websocketClient.onopen = () => {
      console.log('Websocket connected');
      this.websocketConnected = true;
    }
    this.websocketClient.onmessage = (event : MessageEvent<string>) => {
      this.websocketConnected = true;
      this.receiveWebsocketMessages(event.data);
    }
    this.websocketClient.onerror = () => {
      console.log('Websocket closed with error');
      this.websocketSessionHost = false;
      this.websocketConnected = false;
    }
    this.websocketClient.onclose = () => {
      console.log('Websocket closed');
      this.websocketSessionHost = false;
      this.websocketConnected = false;
    }
  }
  

  public updateRegionList(region : RegionOption | null) {
    if(region === null){
      this.locationList = [];
    }else{
      this.locationList = this.locationListProvider.getLocationList(region.id).map( location => {
        return {
          'id': location.id,
          'name': location.name,
          'status': 'caught',
          'active': false
        } as LocationStatus
      });
      this.sendChangeRegionMessage(region.id);
    }
    
  }

  public displayPokemonFn(pokemon: Pokemon): string {
    return pokemon && pokemon.name ? pokemon.name : '';
  }

  public displayRegionFn(region: RegionOption): string {
    return region && region.name ? region.name : '';
  }

  public getControl(location: Location, player: Player): FormControl<string | Pokemon | null> {
    const key = this.getCellKey(location, player);
    if (!this.pokemonControls[key]) {
      this.pokemonControls[key] = new FormControl<string | Pokemon | null>('');
    }
    return this.pokemonControls[key];
  }

  public getCellKey(location: Location, player: Player): string {
    return `${location.id}-${player.id}`;
  }

  private _filterPokemon(name: string): Pokemon[] {
    const filterValue = name.toLowerCase();
    return this.pokemonList.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  private _filterRegion(name: string): RegionOption[] {
    const filterValue = name.toLowerCase();
    return this.regionList.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  public getFilteredPokemonOptions(location: Location, player: Player): Observable<Pokemon[]> {
    const control = this.getControl(location, player);
    return control.valueChanges.pipe(
      startWith(control.value),
      map(value => {
        if (!value) {
          return this.pokemonList.slice(0,10);
        }
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filterPokemon(name as string) : this.pokemonList.slice();
      })
    );
  }

  public getFilteredRegionOptions(): Observable<RegionOption[]> {
    return this.regionFormControl.valueChanges.pipe(
      startWith(this.regionFormControl.value),
      map(value => {
        if (!value) {
          return this.regionList.slice();
        }
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filterRegion(name as string) : this.regionList.slice();
      })
    );
  }

  public playerNameEntered(event : KeyboardEvent) {
    if(event.key === 'Enter') {
      this.addPlayer();
    }
  }

  public addPlayer() : void {
    this.playerName = this.playerName.trim();
    if (this.playerName === '') {
      return;
    }
    const playerDetails = { id: this.getNextFreePlayerId(), name: this.playerName, pokemons: [] };
    this.playerList.push(playerDetails);
    this.playerName = '';
    this.sendAddPlayerMessage(playerDetails.id, playerDetails.name);
  }

  public removePlayer(player : Player) : void {
    this.playerList = this.playerList.filter(p => p.id !== player.id);
    this.locationList.forEach(location => {
      const key = `${location.id}-${player.id}`;
      delete this.pokemonControls[key];
    });
    this.cdr.detectChanges();
  }

  public getNextFreePlayerId() : number {
    let id = 1;
    while (this.playerList.find(p => p.id === id)) {
      id++;
    }
    return id;
  }

  public hasPokemonAtLocation(player : Player, location : Location) {
    return typeof player.pokemons.find(pokemon => pokemon.locationId === location.id) === 'undefined' ? false : true;
  }

  public getPlayerMon(player : Player, location : LocationStatus) {
    return player.pokemons.filter(pokemon => pokemon.locationId === location.id)[0] ?? {
      'status': ''
    };
  }

  public onPokemonSelected(location : Location, player : Player, newPokemon : Pokemon ) {
    const existingPokemon = player.pokemons.find( pokemonCheck => pokemonCheck.locationId === location.id);
    if(typeof existingPokemon === 'undefined'){
      player.pokemons.push({
        'pokemonId': newPokemon.id,
        'locationId': location.id,
        'status': 'caught'
      } as PokemonStatus)
    }else{
      existingPokemon.pokemonId = newPokemon.id;
    }
    this.sendCatchPokemonMessage(player.id, newPokemon.id, location.id);
  }

  public onPokemonStatusSelected(location : Location, player : Player, newStatus : 'none' |'missed' | 'caught' | 'fainted') {
    let playerPokemon = player.pokemons.find(pokemon => pokemon.locationId === location.id);
    if(typeof playerPokemon !== 'undefined'){
      if(newStatus === 'none'){
        player.pokemons = player.pokemons.filter(pokemon => pokemon.locationId !== location.id);
        this.pokemonControls[location.id + '-' + player.id].setValue(null);
      }else{
        playerPokemon.status = newStatus;
      }
      this.sendChangePokemonStatusMessage(player.id, location.id, newStatus);
    }
  }

  public getLocationClass(id : number) {
    
    let resultClass = '';
    let hasFainted = false;
    let hasMissed = false;
    let caughtCounter = 0;
    this.playerList.forEach(player => {
      let status;
      let locationPokemon = player.pokemons.find(pokemon => pokemon.locationId === id);
      if(typeof locationPokemon !== 'undefined'){
        status = locationPokemon.status;
      }else{
        status = 'none';
      }
      if(resultClass === ''){
        if(status === 'fainted'){
          hasFainted = true;
        }else if(status == 'missed'){
          hasMissed = true;
        }else if(status == 'caught'){
          caughtCounter++;
        }
      }
    });

    if(hasFainted){
      resultClass = 'fainted-class';
    }else if(hasMissed){
      resultClass = 'missed-class';
    }else if(caughtCounter === this.playerList.length && this.playerList.length>0){
      resultClass = 'caught-class';
    }
    return resultClass;
  }

  public openDeleteDialog(player : Player) {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: {
        title: 'Delete player',
        message: `Are you sure you want to delete ${player.name}?`,
        confirmText: 'Delete',
        cancelText: 'Cancel',
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.removePlayer(player);
        this.sendRemovePlayerMessage(player.id);
      }
    });
  }

  public openConnectSessionDialog() {
    const dialogRef = this.dialog.open(SessionDialog, {
      data: {
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== false){
        this.connectToWesbocket(result);
      }
    });
  }

  public openResetDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: {
        title: 'Session reset',
        message: `Are you sure you want to reset the current session?`,
        confirmText: 'Reset',
        icon: 'refresh',
        cancelText: 'Cancel',
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.pokemonControls = {};
        this.cdr.detectChanges();
        this.sendResetSessionMessage();
      }
    });
  }

  public saveSession() {
    const playerSession = JSON.stringify({
      regionId: this.regionFormControl.value?.id,
      playerList: this.playerList
    } as TrackSession);

    const blob = new Blob([playerSession], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'player-session.json';
    a.click();

    window.URL.revokeObjectURL(url);
  }

  public loadSession() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json,.json';

    input.onchange = () => {
      const file = input.files?.[0];
      if (!file) {
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        try {
          const text = reader.result as string;
          const trackSession = JSON.parse(text) as TrackSession;
          this.restoreSession(trackSession);
          this.sendLoadSessionMessage();
          
        } catch (e) {
          console.error('Failed to load session', e);
        }
      };

      reader.readAsText(file);
    };

    input.click();
  }

  public restoreSession(trackSession : TrackSession) {
    this.pokemonControls = {};
    this.playerList = trackSession.playerList;
    const region = this.regionList.find(region => region.id === trackSession.regionId) || null;
    this.regionFormControl.setValue(region);

    if(region !== null){
      this.locationList = this.locationListProvider.getLocationList(region.id).map( location => {
        return {
          'id': location.id,
          'name': location.name,
          'status': 'caught',
          'active': false
        } as LocationStatus
      });
    }

    this.locationList.forEach(location => {
      this.playerList.forEach(player => {
        const key = this.getCellKey(location, player);
        const control = new FormControl<string | Pokemon | null>('');

        const pokemonStatus = player.pokemons.find(p => p.locationId === location.id);
        if (pokemonStatus) {
          const pokemon = this.pokemonList.find(p => p.id === pokemonStatus.pokemonId);
          if (pokemon) {
            control.setValue(pokemon);
          }
        }

        this.pokemonControls[key] = control;
      });
    });
    this.cdr.detectChanges();
  }

  public getPokemonDetails(id : number) {
    let details = this.pokemonList.find(pokemon => pokemon.id === id)
    if(typeof details === 'undefined'){
      details = {

      } as Pokemon
    }
    return details;
  }

  public receiveWebsocketMessages(msg : string) {
    let decodedMessage;
    if(msg != 'pong'){
      decodedMessage = JSON.parse(msg);
    }else{
      decodedMessage = msg;
    }
    
    const player = this.playerList.find(playerDetails => playerDetails.id === (decodedMessage['playerId'] ?? ''));
    switch (decodedMessage['type']) {
      case this.websocketMessageTypePong:
        this.websocketConnected = true;
        break;
      case this.websocketMessageTypeSetHost:
        this.websocketSessionHost = true;
        break;
      case this.websocketMessageTypeSyncRequest:
        if(this.websocketSessionHost) {
          this.sendLoadSessionMessage();
        }
        break;
      case this.websocketMessageTypeLoadSession:
        const trackSession = JSON.parse(decodedMessage['sessionDetails']) as TrackSession;
        this.restoreSession(trackSession);
        break;
      case this.websocketMessageTypeResetSession:
        this.pokemonControls = {};
        this.cdr.detectChanges();
        break;
      case this.websocketMessageTypeAddPlayer:
        this.playerList.push({ id: decodedMessage['playerId'], name: decodedMessage['playerName'], pokemons: [] });
        break;
      case this.websocketMessageTypeRemovePlayer:
        if(typeof player !== 'undefined'){
          this.removePlayer(player);
        }
        break;
      case this.websocketMessageTypeRenamePlayer:
        if(typeof player !== 'undefined'){
          player.name = decodedMessage['playerName'];
        }
        break;
      case this.websocketMessageTypeChangeRegion:
        this.locationList = this.locationListProvider.getLocationList(decodedMessage['regionId']).map( location => {
          return {
            'id': location.id,
            'name': location.name,
            'status': 'caught',
            'active': false
          } as LocationStatus
        });
        this.regionList.filter(region => region.id === decodedMessage['regionId']).forEach(region => {
          this.regionFormControl.setValue(region);
        });
        break;
      case this.websocketMessageTypeCatchPokemon:
        if(typeof player !== 'undefined'){
          const existingPokemon = player.pokemons.find( pokemonCheck => pokemonCheck.locationId === decodedMessage['locationId']);
          if(typeof existingPokemon === 'undefined'){
            player.pokemons.push({
              'pokemonId': decodedMessage['pokemonId'],
              'locationId': decodedMessage['locationId'],
              'status': 'caught'
            } as PokemonStatus)
          }else{
            existingPokemon.pokemonId = decodedMessage['pokemonId'];
          }
          this.pokemonList.filter(pokemon => pokemon.id === decodedMessage['pokemonId']).forEach(pokemon => {
            this.pokemonControls[decodedMessage['locationId'] + '-' + decodedMessage['playerId']].setValue(pokemon);
          });
        }
        break;
      case this.websocketMessageTypechangePokemonStatus:
        const existingPokemon = player?.pokemons.find( pokemonCheck => pokemonCheck.locationId === decodedMessage['locationId']);
        if(typeof existingPokemon !== 'undefined' && typeof player !== 'undefined'){
          if(decodedMessage['status'] === 'none'){
            player.pokemons = player.pokemons.filter(pokemon => pokemon.locationId !== decodedMessage['locationId']);
            this.pokemonControls[decodedMessage['locationId'] + '-' + decodedMessage['playerId']].setValue(null);
          }else{
            existingPokemon.status = decodedMessage['status'];
          }
        }
        break;
      default: 
        break;
    }
    this.cdr.detectChanges();
  }

  public sendStartSessionMessage(uuid : string) {
    let msg = {
      'type': this.websocketMessageTypeStartSession,
      'uuid': uuid
    };
    this.sendWebsocketMessages(msg);
  }

  public sendSyncRequest() {
    let msg = {
      'type': this.websocketMessageTypeSyncRequest
    };
    this.sendWebsocketMessages(msg);
  }

  public sendLoadSessionMessage() {
    let msg = {
      'type': this.websocketMessageTypeLoadSession,
      'sessionDetails': JSON.stringify({
        regionId: this.regionFormControl.value?.id,
        playerList: this.playerList
      } as TrackSession)
    };
    this.sendWebsocketMessages(msg);
  }

  public sendResetSessionMessage() {
    let msg = {
      'type': this.websocketMessageTypeResetSession
    };
    this.sendWebsocketMessages(msg);
  }

  public sendAddPlayerMessage(id: number, name :string) {
    let msg = {
      'type': this.websocketMessageTypeAddPlayer,
      'playerId': id,
      'playerName': name
    };
    this.sendWebsocketMessages(msg);
  }

  public sendRenamePlayerMessage(id: number, name :string) {
    let msg = {
      'type': this.websocketMessageTypeRenamePlayer,
      'playerId': id,
      'playerName': name
    };
    this.sendWebsocketMessages(msg);
  }

  public sendRemovePlayerMessage(id: number) {
    let msg = {
      'type': this.websocketMessageTypeRemovePlayer,
      'playerId': id
    };
    this.sendWebsocketMessages(msg);
  }

  public sendChangeRegionMessage(id: number) {
    let msg = {
      'type': this.websocketMessageTypeChangeRegion,
      'regionId': id
    };
    this.sendWebsocketMessages(msg);
  }

  public sendCatchPokemonMessage(playerId: number, pokemonId :number, locationId: number) {
    let msg = {
      'type': this.websocketMessageTypeCatchPokemon,
      'playerId': playerId,
      'pokemonId': pokemonId,
      'locationId': locationId
    };
    this.sendWebsocketMessages(msg);
  }

  public sendChangePokemonStatusMessage(playerId: number, locationId: number, status: string) {
    let msg = {
      'type': this.websocketMessageTypechangePokemonStatus,
      'playerId': playerId,
      'locationId': locationId,
      'status': status
    };
    this.sendWebsocketMessages(msg);
  }


  public sendWebsocketMessages(msg : object) {
    const codedMessage = JSON.stringify(msg);
    this.websocketClient.send(codedMessage);
  }
}

export interface Player {
  id : number;
  name : string;
  pokemons : Array<PokemonStatus>;
}

export interface LocationStatus extends Location {
  status : 'not_visited' | 'caught' | 'lost';
  active : boolean
}

export interface PokemonStatus {
  pokemonId : number;
  locationId : number;
  status : 'none' |'missed' | 'caught' | 'fainted';
}

export interface TrackSession {
  regionId : number,
  playerList : Array<Player>
}