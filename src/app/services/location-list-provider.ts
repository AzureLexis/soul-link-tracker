import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocationListProvider {
  private readonly locationList : Array<Region> = [
    { 
      id: 1,
      name: 'Unova (Black/White)',
      locations: [
        { id: 1, name: 'Route 1' },
        { id: 2, name: 'Route 2' },
        { id: 3, name: 'Striaton City' },
        { id: 4, name: 'Dreamyard' },
        { id: 5, name: 'Route 3' },
        { id: 6, name: 'Wellspring Cave' },
        { id: 7, name: 'Nacrene City' },
        { id: 8, name: 'Pinwheel Forest' },
        { id: 9, name: 'Liberty Garden' },
        { id: 10, name: 'Route 4' },
        { id: 11, name: 'Desert Resort' },
        { id: 12, name: 'Relic Castle' },
        { id: 13, name: 'Route 16' },
        { id: 14, name: 'Route 5' },
        { id: 15, name: 'Lostlorn Forest' },
        { id: 16, name: 'Cold Storage' },
        { id: 17, name: 'Driftveil Drawbidge' },
        { id: 18, name: 'Driftveil City' },
        { id: 19, name: 'Route 6' },
        { id: 20, name: 'Chargestone Cave' },
        { id: 21, name: 'Route 7' },
        { id: 22, name: 'Celestial Tower' },
        { id: 23, name: 'Route 17' },
        { id: 24, name: 'Route 18' },
        { id: 25, name: 'P2 Laboratory' },
        { id: 26, name: 'Mistralton Cave' },
        { id: 27, name: 'Twist Mountain' },
        { id: 28, name: 'Iccirus City' },
        { id: 29, name: 'Route 8' },
        { id: 30, name: 'Moor of Icirrus' },
        { id: 31, name: 'Dragonspiral Tower' },
        { id: 32, name: 'Route 9' },
        { id: 33, name: 'Route 10' },
        { id: 34, name: 'Victory Road' },
        { id: 35, name: 'N\'s Castle' },
        { id: 36, name: 'Route 11' },
        { id: 37, name: 'Village Bridge' },
        { id: 38, name: 'Route 12' },
        { id: 39, name: 'Route 13' },
        { id: 40, name: 'Giant Chasm' },
        { id: 41, name: 'Undella Town' },
        { id: 42, name: 'Undella Bay' },
        { id: 43, name: 'Route 14' },
        { id: 44, name: 'Abundant Shrine' },
        { id: 45, name: 'White Forest' },
        { id: 46, name: 'Route 15' },
        { id: 47, name: 'Marvelous Bridge' },
        { id: 48, name: 'Challenger\'s Cave' }
      ]
    },
    {
      id: 2,
      name: 'Heart gold/Soul silver',
      locations: [
        { id: 1, name: 'New Bark Town' },
        { id: 2, name: 'Route 29' },
        { id: 3, name: 'Route 46' },
        { id: 4, name: 'Cherrygrove City' },
        { id: 5, name: 'Route 30' },
        { id: 6, name: 'Route 31' },
        { id: 7, name: 'Dark Cave' },
        { id: 8, name: 'Violet City' },
        { id: 9, name: 'Sprout Tower' },
        { id: 10, name: 'Route 32' },
        { id: 11, name: 'Ruins of Alph' },
        { id: 12, name: 'Union Cave' },
        { id: 13, name: 'Route 33' },
        { id: 14, name: 'Azalea Town' },
        { id: 15, name: 'Slowpoke Well' },
        { id: 16, name: 'Ilex Forest' },
        { id: 17, name: 'Route 34' },
        { id: 18, name: 'Goldenrod City' },
        { id: 19, name: 'Route 35' },
        { id: 20, name: 'National Park' },
        { id: 21, name: 'Route 36' },
        { id: 22, name: 'Route 37' },
        { id: 23, name: 'Ecruteak City' },
        { id: 24, name: 'Burned Tower' },
        { id: 25, name: 'Bell Tower' },
        { id: 26, name: 'Route 38' },
        { id: 27, name: 'Route 39' },
        { id: 28, name: 'Olivine City' },
        { id: 29, name: 'Route 40' },
        { id: 30, name: 'Route 41' },
        { id: 31, name: 'Whirl Islands' },
        { id: 32, name: 'Cianwood City' },
        { id: 33, name: 'Cliff Edge Gate' },
        { id: 34, name: 'Route 47' },
        { id: 35, name: 'Cliff Cave' },
        { id: 36, name: 'Route 48' },
        { id: 37, name: 'Safari Zone Gate' },
        { id: 38, name: 'Safari Zone' },
        { id: 39, name: 'Route 42' },
        { id: 40, name: 'Mt. Mortar' },
        { id: 41, name: 'Rocket Hideout' },
        { id: 42, name: 'Lake of Rage' },
        { id: 43, name: 'Route 43' },
        { id: 44, name: 'Route 44' },
        { id: 45, name: 'Ice Path' },
        { id: 46, name: 'Blackthorn City' },
        { id: 47, name: 'Dragon\'s Den' },
        { id: 48, name: 'Route 45' },
        { id: 49, name: 'Route 27' },
        { id: 50, name: 'Tohjo Falls' },
        { id: 51, name: 'Route 26' },
        { id: 52, name: 'Victory Road' },
        { id: 53, name: 'Indigo Plateau' },
        { id: 54, name: 'Vermillion City' },
        { id: 55, name: 'Route 6' },
        { id: 56, name: 'Saffron City' },
        { id: 57, name: 'Route 7' },
        { id: 58, name: 'Celadon City' },
        { id: 59, name: 'Route 16' },
        { id: 60, name: 'Route 17' },
        { id: 61, name: 'Route 18' },
        { id: 62, name: 'Fuschia City' },
        { id: 63, name: 'Route 15' },
        { id: 64, name: 'Route 14' },
        { id: 65, name: 'Route 13' },
        { id: 66, name: 'Route 12' },
        { id: 67, name: 'Route 8' },
        { id: 68, name: 'Route 5' },
        { id: 69, name: 'Route 9' },
        { id: 70, name: 'Route 10' },
        { id: 71, name: 'Power Plant' },
        { id: 72, name: 'Route 24' },
        { id: 73, name: 'Route 25' },
        { id: 74, name: 'Cerulean City' },
        { id: 75, name: 'Rock Tunnel' },
        { id: 76, name: 'Route 4' },
        { id: 77, name: 'Route 11' },
        { id: 78, name: 'Diglett\'s Cave' },
        { id: 79, name: 'Pewter City' },
        { id: 80, name: 'Route 3' },
        { id: 81, name: 'Mt. Moon' },
        { id: 82, name: 'Viridian Forest' },
        { id: 83, name: 'Route 2' },
        { id: 84, name: 'Viridian City' },
        { id: 85, name: 'Route 1' },
        { id: 86, name: 'Pallet Town' },
        { id: 87, name: 'Route 21' },
        { id: 88, name: 'Cinnabar Island' },
        { id: 89, name: 'Route 20' },
        { id: 90, name: 'Route 19' },
        { id: 91, name: 'Route 22' },
        { id: 92, name: 'Route 28' },
        { id: 93, name: 'Mt. Silver' }
      ]
    }
  ];

  public getRegions() : Array<RegionOption> {
    return this.locationList.map( region => {
      return {
        id: region.id,
        name: region.name
      } as RegionOption
    });
  }

  public getLocationList(id : number) : Array<Location> {
    return this.locationList.find(region => region.id === id)?.locations ?? [];
  }
}

export interface RegionOption {
  id: number,
  name: string,
  locations: Array<Location>
}

export interface Region extends RegionOption {
  locations: Array<Location>
}

export interface Location {
  id : number;
  name : string;
}