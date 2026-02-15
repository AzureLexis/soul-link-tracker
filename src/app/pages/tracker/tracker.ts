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

  public playerName : string = '';
  public locationList : Array<LocationStatus> = [];
  public readonly pokemonList : Array<Pokemon> = [];
  public playerList : Array<Player> = [];
  public pokemonControls: { [key: string]: FormControl<string | Pokemon | null> } = {};
  public selectedRegion = 1;
  public regionList : Array<RegionOption> = [];
  public regionFormControl : FormControl<RegionOption | null>;
  public hideMissedFainted : string= '1';

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
    this.playerList.push({ id: this.getNextFreePlayerId(), name: this.playerName, pokemons: [] });
    this.playerName = '';
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
        this.playerList = [];
        this.cdr.detectChanges();
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

          this.pokemonControls = {};
          this.playerList = trackSession.playerList;
          this.regionFormControl.setValue(this.regionList.find(region => region.id === trackSession.regionId) || null);

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
        } catch (e) {
          console.error('Failed to load session', e);
        }
      };

      reader.readAsText(file);
    };

    input.click();
  }

  public getPokemonDetails(id : number) {
    let details = this.pokemonList.find(pokemon => pokemon.id === id)
    if(typeof details === 'undefined'){
      details = {

      } as Pokemon
    }
    return details;
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