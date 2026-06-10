import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonListProvider {
  
  private readonly pokemonList : Array<Pokemon> = [
    {
      "id": 1,
      "name": "Bulbasaur",
      "type1": "Grass",
      "type2": "Poison",
      "evolution": [2]
    },
    {
      "id": 2,
      "name": "Ivysaur",
      "type1": "Grass",
      "type2": "Poison",
      "evolution": [3]
    },
    {
      "id": 3,
      "name": "Venusaur",
      "type1": "Grass",
      "type2": "Poison"
    },
    {
      "id": 15003,
      "name": "Mega Venusaur",
      "linkName": "venusaur",
      "type1": "Grass",
      "type2": "Poison"
    },
    {
      "id": 4,
      "name": "Charmander",
      "type1": "Fire",
      "type2": "",
      "evolution": [5]
    },
    {
      "id": 5,
      "name": "Charmeleon",
      "type1": "Fire",
      "type2": "",
      "evolution": [6]
    },
    {
      "id": 6,
      "name": "Charizard",
      "type1": "Fire",
      "type2": "Flying"
    },
    {
      "id": 15006,
      "name": "Mega Charizard X",
      "linkName": "charizard",
      "type1": "Fire",
      "type2": "Dragon"
    },
    {
      "id": 16006,
      "name": "Mega Charizard Y",
      "linkName": "charizard",
      "type1": "Fire",
      "type2": "Flying"
    },
    {
      "id": 7,
      "name": "Squirtle",
      "type1": "Water",
      "type2": "",
      "evolution": [8]
    },
    {
      "id": 8,
      "name": "Wartortle",
      "type1": "Water",
      "type2": "",
      "evolution": [9]
    },
    {
      "id": 9,
      "name": "Blastoise",
      "type1": "Water",
      "type2": ""
    },
    {
      "id": 15009,
      "name": "Mega Blastoise",
      "linkName": "blastoise",
      "type1": "Water",
      "type2": ""
    },
    {
      "id": 10,
      "name": "Caterpie",
      "type1": "Bug",
      "type2": "",
      "evolution": [11]
    },
    {
      "id": 11,
      "name": "Metapod",
      "type1": "Bug",
      "type2": "",
      "evolution": [12]
    },
    {
      "id": 12,
      "name": "Butterfree",
      "type1": "Bug",
      "type2": "Flying"
    },
    {
      "id": 13,
      "name": "Weedle",
      "type1": "Bug",
      "type2": "Poison",
      "evolution": [14]
    },
    {
      "id": 14,
      "name": "Kakuna",
      "type1": "Bug",
      "type2": "Poison",
      "evolution": [15]
    },
    {
      "id": 15,
      "name": "Beedrill",
      "type1": "Bug",
      "type2": "Poison"
    },
    {
      "id": 15015,
      "name": "Mega Beedrill",
      "linkName": "beedrill",
      "type1": "Bug",
      "type2": "Flying"
    },
    {
      "id": 16,
      "name": "Pidgey",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": [17]
    },
    {
      "id": 17,
      "name": "Pidgeotto",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": [18]
    },
    {
      "id": 18,
      "name": "Pidgeot",
      "type1": "Normal",
      "type2": "Flying"
    },
    {
      "id": 15018,
      "name": "Mega Pidgeot",
      "linkName": "pidgeot",
      "type1": "Normal",
      "type2": "Flying"
    },
    {
      "id": 19,
      "name": "Rattata",
      "type1": "Normal",
      "type2": "",
      "evolution": [8019]
    },
    {
      "id": 8019,
      "name": "Rattata (alolan)",
      "linkName":"rattata",
      "type1": "Dark",
      "type2": "Normal"
    },
    {
      "id": 20,
      "name": "Raticate",
      "type1": "Normal",
      "type2": "",
      "evolution": [8020]
    },
    {
      "id": 8020,
      "name": "Raticate (alolan)",
      "linkName":"raticate",
      "type1": "Dark",
      "type2": "Normal"
    },
    {
      "id": 21,
      "name": "Spearow",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": [22]
    },
    {
      "id": 22,
      "name": "Fearow",
      "type1": "Normal",
      "type2": "Flying"
    },
    {
      "id": 23,
      "name": "Ekans",
      "type1": "Poison",
      "type2": "",
      "evolution": [24]
    },
    {
      "id": 24,
      "name": "Arbok",
      "type1": "Poison",
      "type2": ""
    },
    {
      "id": 25,
      "name": "Pikachu",
      "type1": "Electric",
      "type2": "",
      "evolution": [26, 8026]
    },
    {
      "id": 26,
      "name": "Raichu",
      "type1": "Electric",
      "type2": ""
    },
    {
      "id": 8026,
      "name": "Raichu (alolan)",
      "linkName":"raichu",
      "type1": "Electric",
      "type2": "Psychic"
    },
    {
      "id": 15026,
      "name": "Mega Raichu X",
      "linkName": "raichu",
      "type1": "Electric",
      "type2": ""
    },
    {
      "id": 16026,
      "name": "Mega Raichu Y",
      "linkName": "raichu",
      "type1": "Electric",
      "type2": ""
    },
    {
      "id": 27,
      "name": "Sandshrew",
      "type1": "Ground",
      "type2": "",
      "evolution": [28]
    },
    {
      "id": 8027,
      "name": "Sandshrew (alolan)",
      "linkName":"sandshrew",
      "type1": "Ice",
      "type2": "Steel",
      "evolution": [8028]
    },
    {
      "id": 28,
      "name": "Sandslash",
      "type1": "Ground",
      "type2": ""
    },
    {
      "id": 8028,
      "name": "Sandslash (alolan)",
      "linkName":"sandslash",
      "type1": "Ice",
      "type2": "Steel"
    },
    {
      "id": 29,
      "name": "Nidoran F",
      "type1": "Poison",
      "type2": "",
      "evolution": [30]
    },
    {
      "id": 30,
      "name": "Nidorina",
      "type1": "Poison",
      "type2": "",
      "evolution": [31]
    },
    {
      "id": 31,
      "name": "Nidoqueen",
      "type1": "Poison",
      "type2": "Ground"
    },
    {
      "id": 32,
      "name": "Nidoran M",
      "type1": "Poison",
      "type2": "",
      "evolution": [33]
    },
    {
      "id": 33,
      "name": "Nidorino",
      "type1": "Poison",
      "type2": "",
      "evolution": [34]
    },
    {
      "id": 34,
      "name": "Nidoking",
      "type1": "Poison",
      "type2": "Ground"
    },
    {
      "id": 35,
      "name": "Clefairy",
      "type1": "Fairy",
      "type2": "",
      "evolution": [36]
    },
    {
      "id": 36,
      "name": "Clefable",
      "type1": "Fairy",
      "type2": ""
    },
    {
      "id": 15036,
      "name": "Mega Clefable",
      "linkName": "clefable",
      "type1": "Fairy",
      "type2": "Flying"
    },
    {
      "id": 37,
      "name": "Vulpix",
      "type1": "Fire",
      "type2": "",
      "evolution": [38]
    },
    {
      "id": 8037,
      "name": "Vulpix (alolan)",
      "linkName":"vulpix",
      "type1": "Ice",
      "type2": "",
      "evolution": [8038]
    },
    {
      "id": 38,
      "name": "Ninetales",
      "type1": "Fire",
      "type2": ""
    },
    {
      "id": 8038,
      "name": "Ninetales (alolan)",
      "linkName":"ninetales",
      "type1": "Ice",
      "type2": "Fairy"
    },
    {
      "id": 39,
      "name": "Jigglypuff",
      "type1": "Normal",
      "type2": "Fairy",
      "evolution": [40]
    },
    {
      "id": 40,
      "name": "Wigglytuff",
      "type1": "Normal",
      "type2": "Fairy"
    },
    {
      "id": 41,
      "name": "Zubat",
      "type1": "Poison",
      "type2": "Flying",
      "evolution": [42]
    },
    {
      "id": 42,
      "name": "Golbat",
      "type1": "Poison",
      "type2": "Flying",
      "evolution": [169]
    },
    {
      "id": 43,
      "name": "Oddish",
      "type1": "Grass",
      "type2": "Poison",
      "evolution": [44]
    },
    {
      "id": 44,
      "name": "Gloom",
      "type1": "Grass",
      "type2": "Poison",
      "evolution": [45, 182]
    },
    {
      "id": 45,
      "name": "Vileplume",
      "type1": "Grass",
      "type2": "Poison"
    },
    {
      "id": 46,
      "name": "Paras",
      "type1": "Bug",
      "type2": "Grass",
      "evolution": [47]
    },
    {
      "id": 47,
      "name": "Parasect",
      "type1": "Bug",
      "type2": "Grass"
    },
    {
      "id": 48,
      "name": "Venonat",
      "type1": "Bug",
      "type2": "Poison",
      "evolution": [49]
    },
    {
      "id": 49,
      "name": "Venomoth",
      "type1": "Bug",
      "type2": "Poison"
    },
    {
      "id": 50,
      "name": "Diglett",
      "type1": "Ground",
      "type2": "",
      "evolution": [51]
    },
    {
      "id": 8050,
      "name": "Diglett (alolan)",
      "linkName":"diglett",
      "type1": "Ground",
      "type2": "Steel",
      "evolution": [8051]
    },
    {
      "id": 51,
      "name": "Dugtrio",
      "type1": "Ground",
      "type2": ""
    },
    {
      "id": 8051,
      "name": "Dugtrio (alolan)",
      "linkName":"dugtrio",
      "type1": "Ground",
      "type2": "Steel"
    },
    {
      "id": 52,
      "name": "Meowth",
      "type1": "Normal",
      "type2": "",
      "evolution": [53]
    },
    {
      "id": 8052,
      "name": "Meowth (alolan)",
      "linkName":"meowth",
      "type1": "Dark",
      "type2": "",
      "evolution": [8053]
    },
    {
      "id": 20052,
      "name": "Meowth (galarian)",
      "linkName": "meowth",
      "type1": "Steel",
      "type2": "",
      "evolution": [863]
    },
    {
      "id": 53,
      "name": "Persian",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 8053,
      "name": "Persian (alolan)",
      "linkName":"persian",
      "type1": "Dark",
      "type2": ""
    },
    {
      "id": 54,
      "name": "Psyduck",
      "type1": "Water",
      "type2": "",
      "evolution": [55]
    },
    {
      "id": 55,
      "name": "Golduck",
      "type1": "Water",
      "type2": ""
    },
    {
      "id": 56,
      "name": "Mankey",
      "type1": "Fighting",
      "type2": "",
      "evolution": [57]
    },
    {
      "id": 57,
      "name": "Primeape",
      "type1": "Fighting",
      "type2": ""
    },
    {
      "id": 58,
      "name": "Growlithe",
      "type1": "Fire",
      "type2": "",
      "evolution": [59]
    },
    {
      "id": 30058,
      "name": "Growlithe (hisuian)",
      "linkName": "growlithe",
      "type1": "Fire",
      "type2": "Rock",
      "evolution": [30059]
    },
    {
      "id": 59,
      "name": "Arcanine",
      "type1": "Fire",
      "type2": ""
    },
    {
      "id": 30059,
      "name": "Arcanine (hisuian)",
      "linkName": "arcanine",
      "type1": "Fire",
      "type2": "Rock",
    },
    {
      "id": 60,
      "name": "Poliwag",
      "type1": "Water",
      "type2": "",
      "evolution": [60]
    },
    {
      "id": 61,
      "name": "Poliwhirl",
      "type1": "Water",
      "type2": "",
      "evolution": [62, 186]
    },
    {
      "id": 62,
      "name": "Poliwrath",
      "type1": "Water",
      "type2": "Fighting"
    },
    {
      "id": 63,
      "name": "Abra",
      "type1": "Psychic",
      "type2": "",
      "evolution": [64]
    },
    {
      "id": 64,
      "name": "Kadabra",
      "type1": "Psychic",
      "type2": "",
      "evolution": [65]
    },
    {
      "id": 65,
      "name": "Alakazam",
      "type1": "Psychic",
      "type2": ""
    },
    {
      "id": 15065,
      "name": "Mega Alakazam",
      "linkName": "alakazam",
      "type1": "Psychic",
      "type2": ""
    },
    {
      "id": 66,
      "name": "Machop",
      "type1": "Fighting",
      "type2": "",
      "evolution": [67]
    },
    {
      "id": 67,
      "name": "Machoke",
      "type1": "Fighting",
      "type2": "",
      "evolution": [68]
    },
    {
      "id": 68,
      "name": "Machamp",
      "type1": "Fighting",
      "type2": ""
    },
    {
      "id": 69,
      "name": "Bellsprout",
      "type1": "Grass",
      "type2": "Poison",
      "evolution": [70]
    },
    {
      "id": 70,
      "name": "Weepinbell",
      "type1": "Grass",
      "type2": "Poison",
      "evolution": [71]
    },
    {
      "id": 71,
      "name": "Victreebel",
      "type1": "Grass",
      "type2": "Poison"
    },
    {
      "id": 15071,
      "name": "Mega Victreebel",
      "linkName": "victreebel",
      "type1": "Grass",
      "type2": "Poison"
    },
    {
      "id": 72,
      "name": "Tentacool",
      "type1": "Water",
      "type2": "Poison",
      "evolution": [73]
    },
    {
      "id": 73,
      "name": "Tentacruel",
      "type1": "Water",
      "type2": "Poison"
    },
    {
      "id": 74,
      "name": "Geodude",
      "type1": "Rock",
      "type2": "Ground",
      "evolution": [75]
    },
    {
      "id": 8074,
      "name": "Geodude (alolan)",
      "linkName":"geodude",
      "type1": "Rock",
      "type2": "Electric",
      "evolution": [8075]
    },
    {
      "id": 75,
      "name": "Graveler",
      "type1": "Rock",
      "type2": "Ground",
      "evolution": [76]
    },
    {
      "id": 8075,
      "name": "Graveler (alolan)",
      "linkName":"graveler",
      "type1": "Rock",
      "type2": "Electric",
      "evolution": [8076]
    },
    {
      "id": 76,
      "name": "Golem",
      "type1": "Rock",
      "type2": "Ground"
    },
    {
      "id": 8076,
      "name": "Golem (alolan)",
      "linkName":"golem",
      "type1": "Rock",
      "type2": "Electric"
    },
    {
      "id": 77,
      "name": "Ponyta",
      "type1": "Fire",
      "type2": "",
      "evolution": [78]
    },
    {
      "id": 20077,
      "name": "Ponyta (galarian)",
      "linkName": "ponyta",
      "type1": "Psychic",
      "type2": "",
      "evolution": [20078]
    },
    {
      "id": 78,
      "name": "Rapidash",
      "type1": "Fire",
      "type2": ""
    },
    {
      "id": 20078,
      "name": "Rapidash (galarian)",
      "linkName": "rapidash",
      "type1": "Psychic",
      "type2": "Fairy",
      "evolution": [20078]
    },
    {
      "id": 79,
      "name": "Slowpoke",
      "type1": "Water",
      "type2": "Psychic",
      "evolution": [80, 199]
    },
    {
      "id": 20079,
      "name": "Slowpoke (galarian)",
      "linkName": "slowpoke",
      "type1": "Psychic",
      "type2": "",
      "evolution": [20080, 20199]
    },
    {
      "id": 80,
      "name": "Slowbro",
      "type1": "Water",
      "type2": "Psychic"
    },
    {
      "id": 20080,
      "name": "Slowbro (galarian)",
      "linkName": "slowbro",
      "type1": "Poison",
      "type2": "Psychic"
    },
    {
      "id": 15080,
      "name": "Mega Slowbro",
      "linkName": "slowbro",
      "type1": "Water",
      "type2": "Psychic"
    },
    {
      "id": 81,
      "name": "Magnemite",
      "type1": "Electric",
      "type2": "Steel",
      "evolution": [82]
    },
    {
      "id": 82,
      "name": "Magneton",
      "type1": "Electric",
      "type2": "Steel",
      "evolution": [462]
    },
    {
      "id": 83,
      "name": "Farfetchd",
      "type1": "Normal",
      "type2": "Flying"
    },
    {
      "id": 20083,
      "name": "Farfetchd (galarian)",
      "linkName": "farfetchd",
      "type1": "Fighting",
      "type2": "",
      "evolution": [865]
    },
    {
      "id": 84,
      "name": "Doduo",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": [85]
    },
    {
      "id": 85,
      "name": "Dodrio",
      "type1": "Normal",
      "type2": "Flying"
    },
    {
      "id": 86,
      "name": "Seel",
      "type1": "Water",
      "type2": "",
      "evolution": [87]
    },
    {
      "id": 87,
      "name": "Dewgong",
      "type1": "Water",
      "type2": "Ice"
    },
    {
      "id": 88,
      "name": "Grimer",
      "type1": "Poison",
      "type2": "",
      "evolution": [89]
    },
    {
      "id": 8088,
      "name": "Grimer (alolan)",
      "linkName":"grimer",
      "type1": "Poison",
      "type2": "Dark",
      "evolution": [8089]
    },
    {
      "id": 89,
      "name": "Muk",
      "type1": "Poison",
      "type2": ""
    },
    {
      "id": 8089,
      "name": "Muk (alolan)",
      "linkName":"muk",
      "type1": "Poison",
      "type2": "Dark"
    },
    {
      "id": 90,
      "name": "Shellder",
      "type1": "Water",
      "type2": "",
      "evolution": [91]
    },
    {
      "id": 91,
      "name": "Cloyster",
      "type1": "Water",
      "type2": "Ice"
    },
    {
      "id": 92,
      "name": "Gastly",
      "type1": "Ghost",
      "type2": "Poison",
      "evolution": [93]
    },
    {
      "id": 93,
      "name": "Haunter",
      "type1": "Ghost",
      "type2": "Poison",
      "evolution": [94]
    },
    {
      "id": 94,
      "name": "Gengar",
      "type1": "Ghost",
      "type2": "Poison"
    },
    {
      "id": 15094,
      "name": "Mega Gengar",
      "linkName": "gengar",
      "type1": "Ghost",
      "type2": "Poison"
    },
    {
      "id": 95,
      "name": "Onix",
      "type1": "Rock",
      "type2": "Ground",
      "evolution": [96]
    },
    {
      "id": 96,
      "name": "Drowzee",
      "type1": "Psychic",
      "type2": "",
      "evolution": [97]
    },
    {
      "id": 97,
      "name": "Hypno",
      "type1": "Psychic",
      "type2": ""
    },
    {
      "id": 98,
      "name": "Krabby",
      "type1": "Water",
      "type2": "",
      "evolution": [99]
    },
    {
      "id": 99,
      "name": "Kingler",
      "type1": "Water",
      "type2": ""
    },
    {
      "id": 100,
      "name": "Voltorb",
      "type1": "Electric",
      "type2": "",
      "evolution": [101]
    },
    {
      "id": 30100,
      "name": "Voltorb (hisuian)",
      "linkName": "voltorb",
      "type1": "Electric",
      "type2": "Grass",
      "evolution": [30101]
    },
    {
      "id": 101,
      "name": "Electrode",
      "type1": "Electric",
      "type2": ""
    },
    {
      "id": 30101,
      "name": "Electrode (hisuian)",
      "linkName": "electrode",
      "type1": "Electric",
      "type2": "Grass"
    },
    {
      "id": 102,
      "name": "Exeggcute",
      "type1": "Grass",
      "type2": "Psychic",
      "evolution": [103, 8103]
    },
    {
      "id": 103,
      "name": "Exeggutor",
      "type1": "Grass",
      "type2": "Psychic"
    },
    {
      "id": 8103,
      "name": "Exeggutor (alolan)",
      "linkName":"exeggutor",
      "type1": "Grass",
      "type2": "Dragon"
    },
    {
      "id": 104,
      "name": "Cubone",
      "type1": "Ground",
      "type2": "",
      "evolution": [105, 8105]
    },
    {
      "id": 105,
      "name": "Marowak",
      "type1": "Ground",
      "type2": ""
    },
    {
      "id": 8105,
      "name": "Marowak (alolan)",
      "linkName":"marowak",
      "type1": "Fire",
      "type2": "Ghost"
    },
    {
      "id": 106,
      "name": "Hitmonlee",
      "type1": "Fighting",
      "type2": "",
    },
    {
      "id": 107,
      "name": "Hitmonchan",
      "type1": "Fighting",
      "type2": ""
    },
    {
      "id": 108,
      "name": "Lickitung",
      "type1": "Normal",
      "type2": "",
      "evolution": [463]
    },
    {
      "id": 109,
      "name": "Koffing",
      "type1": "Poison",
      "type2": "",
      "evolution": [110, 20100]
    },
    {
      "id": 110,
      "name": "Weezing",
      "type1": "Poison",
      "type2": ""
    },
    {
      "id": 20110,
      "name": "Weezing (galarian)",
      "linkName": "weezing",
      "type1": "Poison",
      "type2": "Fairy"
    },
    {
      "id": 111,
      "name": "Rhyhorn",
      "type1": "Ground",
      "type2": "Rock",
      "evolution": [112]
    },
    {
      "id": 112,
      "name": "Rhydon",
      "type1": "Ground",
      "type2": "Rock",
      "evolution": [464]
    },
    {
      "id": 113,
      "name": "Chansey",
      "type1": "Normal",
      "type2": "",
      "evolution": [242]
    },
    {
      "id": 114,
      "name": "Tangela",
      "type1": "Grass",
      "type2": "",
      "evolution": [465]
    },
    {
      "id": 115,
      "name": "Kangaskhan",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 15115,
      "name": "Mega Kangaskhan",
      "linkName": "kangaskhan",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 116,
      "name": "Horsea",
      "type1": "Water",
      "type2": "",
      "evolution": [117]
    },
    {
      "id": 117,
      "name": "Seadra",
      "type1": "Water",
      "type2": "",
      "evolution": [230]
    },
    {
      "id": 118,
      "name": "Goldeen",
      "type1": "Water",
      "type2": "",
      "evolution": [119]
    },
    {
      "id": 119,
      "name": "Seaking",
      "type1": "Water",
      "type2": ""
    },
    {
      "id": 120,
      "name": "Staryu",
      "type1": "Water",
      "type2": "",
      "evolution": [121]
    },
    {
      "id": 121,
      "name": "Starmie",
      "type1": "Water",
      "type2": "Psychic"
    },
    {
      "id": 15121,
      "name": "Mega Starmie",
      "linkName": "starmie",
      "type1": "Water",
      "type2": "Psychic"
    },
    {
      "id": 122,
      "name": "Mr Mime",
      "type1": "Psychic",
      "type2": "Fairy"
    },
    {
      "id": 20122,
      "name": "Mr Mime (galarian)",
      "linkName": "mr mime",
      "type1": "Ice",
      "type2": "Psychic"
    },
    {
      "id": 123,
      "name": "Scyther",
      "type1": "Bug",
      "type2": "Flying",
      "evolution": [212, 900]
    },
    {
      "id": 124,
      "name": "Jynx",
      "type1": "Ice",
      "type2": "Psychic"
    },
    {
      "id": 125,
      "name": "Electabuzz",
      "type1": "Electric",
      "type2": "",
      "evolution": [466]
    },
    {
      "id": 126,
      "name": "Magmar",
      "type1": "Fire",
      "type2": "",
      "evolution": [467]
    },
    {
      "id": 127,
      "name": "Pinsir",
      "type1": "Bug",
      "type2": ""
    },
    {
      "id": 15127,
      "name": "Mega Pinsir",
      "linkName": "pinsir",
      "type1": "Bug",
      "type2": "Flying"
    },
    {
      "id": 128,
      "name": "Tauros",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 129,
      "name": "Magikarp",
      "type1": "Water",
      "type2": "",
      "evolution": [130]
    },
    {
      "id": 130,
      "name": "Gyarados",
      "type1": "Water",
      "type2": "Flying"
    },
    {
      "id": 15130,
      "name": "Mega Gyarados",
      "linkName": "gyarados",
      "type1": "Water",
      "type2": "Dark"
    },
    {
      "id": 131,
      "name": "Lapras",
      "type1": "Water",
      "type2": "Ice"
    },
    {
      "id": 132,
      "name": "Ditto",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 133,
      "name": "Eevee",
      "type1": "Normal",
      "type2": "",
      "evolution": [134, 135, 136, 196, 197, 470, 471, 700]
    },
    {
      "id": 134,
      "name": "Vaporeon",
      "type1": "Water",
      "type2": ""
    },
    {
      "id": 135,
      "name": "Jolteon",
      "type1": "Electric",
      "type2": ""
    },
    {
      "id": 136,
      "name": "Flareon",
      "type1": "Fire",
      "type2": ""
    },
    {
      "id": 137,
      "name": "Porygon",
      "type1": "Normal",
      "type2": "",
      "evolution": [233, 474]
    },
    {
      "id": 138,
      "name": "Omanyte",
      "type1": "Rock",
      "type2": "Water",
      "evolution": [139]
    },
    {
      "id": 139,
      "name": "Omastar",
      "type1": "Rock",
      "type2": "Water"
    },
    {
      "id": 140,
      "name": "Kabuto",
      "type1": "Rock",
      "type2": "Water",
      "evolution": [141]
    },
    {
      "id": 141,
      "name": "Kabutops",
      "type1": "Rock",
      "type2": "Water"
    },
    {
      "id": 142,
      "name": "Aerodactyl",
      "type1": "Rock",
      "type2": "Flying"
    },
    {
      "id": 15142,
      "name": "Mega Aerodactyl",
      "linkName": "aerodactyl",
      "type1": "Rock",
      "type2": "Flying"
    },
    {
      "id": 143,
      "name": "Snorlax",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 144,
      "name": "Articuno",
      "type1": "Ice",
      "type2": "Flying"
    },
    {
      "id": 20144,
      "name": "Aricuno (galarian)",
      "linkName": "articuno",
      "type1": "Psychic",
      "type2": "Flying"
    },
    {
      "id": 145,
      "name": "Zapdos",
      "type1": "Electric",
      "type2": "Flying"
    },
    {
      "id": 20145,
      "name": "Zapdos (galarian)",
      "linkName": "zapdos",
      "type1": "Fighting",
      "type2": "Flying"
    },
    {
      "id": 146,
      "name": "Moltres",
      "type1": "Fire",
      "type2": "Flying"
    },
    {
      "id": 20146,
      "name": "Moltres (galarian)",
      "linkName": "moltres",
      "type1": "Dark",
      "type2": "Flying"
    },
    {
      "id": 147,
      "name": "Dratini",
      "type1": "Dragon",
      "type2": "",
      "evolution": [148]
    },
    {
      "id": 148,
      "name": "Dragonair",
      "type1": "Dragon",
      "type2": "",
      "evolution": [149]
    },
    {
      "id": 149,
      "name": "Dragonite",
      "type1": "Dragon",
      "type2": "Flying"
    },
    {
      "id": 15149,
      "name": "Mega Dragonite",
      "linkName": "dragonite",
      "type1": "Dragon",
      "type2": "Flying"
    },
    {
      "id": 150,
      "name": "Mewtwo",
      "type1": "Psychic",
      "type2": ""
    },
    {
      "id": 15150,
      "name": "Mewtwo X",
      "linkName": "mewtwo",
      "type1": "Psychic",
      "type2": "Fighting"
    },
    {
      "id": 16150,
      "name": "Mewtwo Y",
      "linkName": "mewtwo",
      "type1": "Psychic",
      "type2": ""
    },
    {
      "id": 151,
      "name": "Mew",
      "type1": "Psychic",
      "type2": ""
    },
    {
      "id": 152,
      "name": "Chikorita",
      "type1": "Grass",
      "type2": "",
      "evolution": [153]
    },
    {
      "id": 153,
      "name": "Bayleef",
      "type1": "Grass",
      "type2": "",
      "evolution": [154]
    },
    {
      "id": 154,
      "name": "Meganium",
      "type1": "Grass",
      "type2": ""
    },
    {
      "id": 15154,
      "name": "Mega Meganium",
      "linkName": "meganium",
      "type1": "Grass",
      "type2": "Fairy"
    },
    {
      "id": 155,
      "name": "Cyndaquil",
      "type1": "Fire",
      "type2": "",
      "evolution": [156]
    },
    {
      "id": 156,
      "name": "Quilava",
      "type1": "Fire",
      "type2": "",
      "evolution": [157, 30157]
    },
    {
      "id": 157,
      "name": "Typhlosion",
      "type1": "Fire",
      "type2": ""
    },
    {
      "id": 30157,
      "name": "Typhlosion (hisuian)",
      "linkName": "typhlosion",
      "type1": "Fire",
      "type2": "Ghost"
    },
    {
      "id": 158,
      "name": "Totodile",
      "type1": "Water",
      "type2": "",
      "evolution": [159]
    },
    {
      "id": 159,
      "name": "Croconaw",
      "type1": "Water",
      "type2": "",
      "evolution": [160]
    },
    {
      "id": 160,
      "name": "Feraligatr",
      "type1": "Water",
      "type2": ""
    },
    {
      "id": 15160,
      "name": "Mega Feraligatr",
      "linkName": "feraligatr",
      "type1": "Water",
      "type2": "Dragon"
    },
    {
      "id": 161,
      "name": "Sentret",
      "type1": "Normal",
      "type2": "",
      "evolution": [162]
    },
    {
      "id": 162,
      "name": "Furret",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 163,
      "name": "Hoothoot",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": [164]
    },
    {
      "id": 164,
      "name": "Noctowl",
      "type1": "Normal",
      "type2": "Flying"
    },
    {
      "id": 165,
      "name": "Ledyba",
      "type1": "Bug",
      "type2": "Flying",
      "evolution": [166]
    },
    {
      "id": 166,
      "name": "Ledian",
      "type1": "Bug",
      "type2": "Flying"
    },
    {
      "id": 167,
      "name": "Spinarak",
      "type1": "Bug",
      "type2": "Poison",
      "evolution": [168]
    },
    {
      "id": 168,
      "name": "Ariados",
      "type1": "Bug",
      "type2": "Poison"
    },
    {
      "id": 169,
      "name": "Crobat",
      "type1": "Poison",
      "type2": "Flying"
    },
    {
      "id": 170,
      "name": "Chinchou",
      "type1": "Water",
      "type2": "Electric",
      "evolution": [171]
    },
    {
      "id": 171,
      "name": "Lanturn",
      "type1": "Water",
      "type2": "Electric"
    },
    {
      "id": 172,
      "name": "Pichu",
      "type1": "Electric",
      "type2": "",
      "evolution": [25]
    },
    {
      "id": 173,
      "name": "Cleffa",
      "type1": "Fairy",
      "type2": "",
      "evolution": [35]
    },
    {
      "id": 174,
      "name": "Igglybuff",
      "type1": "Normal",
      "type2": "Fairy",
      "evolution": [39]
    },
    {
      "id": 175,
      "name": "Togepi",
      "type1": "Fairy",
      "type2": "",
      "evolution": [176]
    },
    {
      "id": 176,
      "name": "Togetic",
      "type1": "Fairy",
      "type2": "Flying",
      "evolution": [468]
    },
    {
      "id": 177,
      "name": "Natu",
      "type1": "Psychic",
      "type2": "Flying",
      "evolution": [178]
    },
    {
      "id": 178,
      "name": "Xatu",
      "type1": "Psychic",
      "type2": "Flying"
    },
    {
      "id": 179,
      "name": "Mareep",
      "type1": "Electric",
      "type2": "",
      "evolution": [180]
    },
    {
      "id": 180,
      "name": "Flaaffy",
      "type1": "Electric",
      "type2": "",
      "evolution": [181]
    },
    {
      "id": 181,
      "name": "Ampharos",
      "type1": "Electric",
      "type2": ""
    },
    {
      "id": 15181,
      "name": "Mega Ampharos",
      "linkName": "ampharos",
      "type1": "Electric",
      "type2": "Dragon"
    },
    {
      "id": 182,
      "name": "Bellossom",
      "type1": "Grass",
      "type2": ""
    },
    {
      "id": 183,
      "name": "Marill",
      "type1": "Water",
      "type2": "Fairy",
      "evolution": [184]
    },
    {
      "id": 184,
      "name": "Azumarill",
      "type1": "Water",
      "type2": "Fairy"
    },
    {
      "id": 185,
      "name": "Sudowoodo",
      "type1": "Rock",
      "type2": ""
    },
    {
      "id": 186,
      "name": "Politoed",
      "type1": "Water",
      "type2": ""
    },
    {
      "id": 187,
      "name": "Hoppip",
      "type1": "Grass",
      "type2": "Flying",
      "evolution": [188]
    },
    {
      "id": 188,
      "name": "Skiploom",
      "type1": "Grass",
      "type2": "Flying",
      "evolution": [189]
    },
    {
      "id": 189,
      "name": "Jumpluff",
      "type1": "Grass",
      "type2": "Flying"
    },
    {
      "id": 190,
      "name": "Aipom",
      "type1": "Normal",
      "type2": "",
      "evolution": [424]
    },
    {
      "id": 191,
      "name": "Sunkern",
      "type1": "Grass",
      "type2": "",
      "evolution": [192]
    },
    {
      "id": 192,
      "name": "Sunflora",
      "type1": "Grass",
      "type2": ""
    },
    {
      "id": 193,
      "name": "Yanma",
      "type1": "Bug",
      "type2": "Flying",
      "evolution": [469]
    },
    {
      "id": 194,
      "name": "Wooper",
      "type1": "Water",
      "type2": "Ground",
      "evolution": [195]
    },
    {
      "id": 195,
      "name": "Quagsire",
      "type1": "Water",
      "type2": "Ground"
    },
    {
      "id": 196,
      "name": "Espeon",
      "type1": "Psychic",
      "type2": ""
    },
    {
      "id": 197,
      "name": "Umbreon",
      "type1": "Dark",
      "type2": ""
    },
    {
      "id": 198,
      "name": "Murkrow",
      "type1": "Dark",
      "type2": "Flying",
      "evolution": [430]
    },
    {
      "id": 199,
      "name": "Slowking",
      "type1": "Water",
      "type2": "Psychic"
    },
    {
      "id": 20199,
      "name": "Slowking (galarian)",
      "linkName": "slowking",
      "type1": "Poison",
      "type2": "Psychic"
    },
    {
      "id": 200,
      "name": "Misdreavus",
      "type1": "Ghost",
      "type2": "",
      "evolution": [429]
    },
    {
      "id": 201,
      "name": "Unown",
      "type1": "Psychic",
      "type2": ""
    },
    {
      "id": 202,
      "name": "Wobbuffet",
      "type1": "Psychic",
      "type2": ""
    },
    {
      "id": 203,
      "name": "Girafarig",
      "type1": "Normal",
      "type2": "Psychic"
    },
    {
      "id": 204,
      "name": "Pineco",
      "type1": "Bug",
      "type2": "",
      "evolution": [205]
    },
    {
      "id": 205,
      "name": "Forretress",
      "type1": "Bug",
      "type2": "Steel"
    },
    {
      "id": 206,
      "name": "Dunsparce",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 207,
      "name": "Gligar",
      "type1": "Ground",
      "type2": "Flying",
      "evolution": [472]
    },
    {
      "id": 208,
      "name": "Steelix",
      "type1": "Steel",
      "type2": "Ground"
    },
    {
      "id": 15208,
      "name": "Mega Steelix",
      "linkName": "steelix",
      "type1": "Steel",
      "type2": "Ground"
    },
    {
      "id": 209,
      "name": "Snubbull",
      "type1": "Fairy",
      "type2": "",
      "evolution": [210]
    },
    {
      "id": 210,
      "name": "Granbull",
      "type1": "Fairy",
      "type2": ""
    },
    {
      "id": 211,
      "name": "Qwilfish",
      "type1": "Water",
      "type2": "Poison"
    },
    {
      "id": 30211,
      "name": "Qwilfish (hisuian)",
      "linkName": "qwilfish",
      "type1": "Dark",
      "type2": "Poison",
      "evolution": [904]
    },
    {
      "id": 212,
      "name": "Scizor",
      "type1": "Bug",
      "type2": "Steel"
    },
    {
      "id": 15212,
      "name": "Mega Scizor",
      "linkName": "scizor",
      "type1": "Bug",
      "type2": "Steel"
    },
    {
      "id": 213,
      "name": "Shuckle",
      "type1": "Bug",
      "type2": "Rock"
    },
    {
      "id": 214,
      "name": "Heracross",
      "type1": "Bug",
      "type2": "Fighting"
    },
    {
      "id": 15214,
      "name": "Mega Heracross",
      "linkName": "heracross",
      "type1": "Bug",
      "type2": "Fighting"
    },
    {
      "id": 215,
      "name": "Sneasel",
      "type1": "Dark",
      "type2": "Ice",
      "evolution": [461]
    },
    {
      "id": 30215,
      "name": "Sneasel (hisuian)",
      "linkName": "sneasel",
      "type1": "Fighting",
      "type2": "Poison",
      "evolution": [903]
    },
    {
      "id": 216,
      "name": "Teddiursa",
      "type1": "Normal",
      "type2": "",
      "evolution": [217]
    },
    {
      "id": 217,
      "name": "Ursaring",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 218,
      "name": "Slugma",
      "type1": "Fire",
      "type2": "",
      "evolution": [219]
    },
    {
      "id": 219,
      "name": "Magcargo",
      "type1": "Fire",
      "type2": "Rock"
    },
    {
      "id": 220,
      "name": "Swinub",
      "type1": "Ice",
      "type2": "Ground",
      "evolution": [221]
    },
    {
      "id": 221,
      "name": "Piloswine",
      "type1": "Ice",
      "type2": "Ground"
    },
    {
      "id": 222,
      "name": "Corsola",
      "type1": "Water",
      "type2": "Rock",
    },
    {
      "id": 20222,
      "name": "Corsola (galarian)",
      "linkName": "corsola",
      "type1": "Ghost",
      "type2": "",
      "evolution": [864]
    },
    {
      "id": 223,
      "name": "Remoraid",
      "type1": "Water",
      "type2": "",
      "evolution": [224]
    },
    {
      "id": 224,
      "name": "Octillery",
      "type1": "Water",
      "type2": ""
    },
    {
      "id": 225,
      "name": "Delibird",
      "type1": "Ice",
      "type2": "Flying"
    },
    {
      "id": 226,
      "name": "Mantine",
      "type1": "Water",
      "type2": "Flying",
    },
    {
      "id": 227,
      "name": "Skarmory",
      "type1": "Steel",
      "type2": "Flying"
    },
    {
      "id": 15227,
      "name": "Mega Skarmory",
      "linkName": "skarmory",
      "type1": "Steel",
      "type2": "Flying"
    },
    {
      "id": 228,
      "name": "Houndour",
      "type1": "Dark",
      "type2": "Fire",
      "evolution": [229]
    },
    {
      "id": 229,
      "name": "Houndoom",
      "type1": "Dark",
      "type2": "Fire"
    },
    {
      "id": 15229,
      "name": "Mega Houndoom",
      "linkName": "houndoom",
      "type1": "Dark",
      "type2": "Fire"
    },
    {
      "id": 230,
      "name": "Kingdra",
      "type1": "Water",
      "type2": "Dragon"
    },
    {
      "id": 231,
      "name": "Phanpy",
      "type1": "Ground",
      "type2": "",
      "evolution": [232]
    },
    {
      "id": 232,
      "name": "Donphan",
      "type1": "Ground",
      "type2": ""
    },
    {
      "id": 233,
      "name": "Porygon2",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 234,
      "name": "Stantler",
      "type1": "Normal",
      "type2": "",
      "evolution": [899]
    },
    {
      "id": 235,
      "name": "Smeargle",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 236,
      "name": "Tyrogue",
      "type1": "Fighting",
      "type2": "",
      "evolution": [106, 107, 237]
    },
    {
      "id": 237,
      "name": "Hitmontop",
      "type1": "Fighting",
      "type2": ""
    },
    {
      "id": 238,
      "name": "Smoochum",
      "type1": "Ice",
      "type2": "Psychic",
      "evolution": [124]
    },
    {
      "id": 239,
      "name": "Elekid",
      "type1": "Electric",
      "type2": "",
      "evolution": [125]
    },
    {
      "id": 240,
      "name": "Magby",
      "type1": "Fire",
      "type2": "",
      "evolution": [126]
    },
    {
      "id": 241,
      "name": "Miltank",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 242,
      "name": "Blissey",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 243,
      "name": "Raikou",
      "type1": "Electric",
      "type2": ""
    },
    {
      "id": 244,
      "name": "Entei",
      "type1": "Fire",
      "type2": ""
    },
    {
      "id": 245,
      "name": "Suicune",
      "type1": "Water",
      "type2": ""
    },
    {
      "id": 246,
      "name": "Larvitar",
      "type1": "Rock",
      "type2": "Ground",
      "evolution": [247]
    },
    {
      "id": 247,
      "name": "Pupitar",
      "type1": "Rock",
      "type2": "Ground",
      "evolution": [248]
    },
    {
      "id": 248,
      "name": "Tyranitar",
      "type1": "Rock",
      "type2": "Dark"
    },
    {
      "id": 15248,
      "name": "Mega Tyranitar",
      "linkName": "tyranitar",
      "type1": "Rock",
      "type2": "Dark"
    },
    {
      "id": 249,
      "name": "Lugia",
      "type1": "Psychic",
      "type2": "Flying"
    },
    {
      "id": 250,
      "name": "Ho Oh",
      "type1": "Fire",
      "type2": "Flying"
    },
    {
      "id": 251,
      "name": "Celebi",
      "type1": "Psychic",
      "type2": "Grass"
    },
    {
      "id": 252,
      "name": "Treecko",
      "type1": "Grass",
      "type2": "",
      "evolution": [253]
    },
    {
      "id": 253,
      "name": "Grovyle",
      "type1": "Grass",
      "type2": "",
      "evolution": [254]
    },
    {
      "id": 254,
      "name": "Sceptile",
      "type1": "Grass",
      "type2": ""
    },
    {
      "id": 15254,
      "name": "Mega Sceptile",
      "linkName": "sceptile",
      "type1": "Grass",
      "type2": "Dragon"
    },
    {
      "id": 255,
      "name": "Torchic",
      "type1": "Fire",
      "type2": "",
      "evolution": [256]
    },
    {
      "id": 256,
      "name": "Combusken",
      "type1": "Fire",
      "type2": "Fighting",
      "evolution": [257]
    },
    {
      "id": 257,
      "name": "Blaziken",
      "type1": "Fire",
      "type2": "Fighting"
    },
    {
      "id": 15257,
      "name": "Mega Blaziken",
      "linkName": "blaziken",
      "type1": "Fire",
      "type2": "Fighting"
    },
    {
      "id": 258,
      "name": "Mudkip",
      "type1": "Water",
      "type2": "",
      "evolution": [259]
    },
    {
      "id": 259,
      "name": "Marshtomp",
      "type1": "Water",
      "type2": "Ground",
      "evolution": [260]
    },
    {
      "id": 260,
      "name": "Swampert",
      "type1": "Water",
      "type2": "Ground"
    },
    {
      "id": 15260,
      "name": "Mega Swampert",
      "linkName": "swampert",
      "type1": "Water",
      "type2": "Ground"
    },
    {
      "id": 261,
      "name": "Poochyena",
      "type1": "Dark",
      "type2": "",
      "evolution": [262]
    },
    {
      "id": 262,
      "name": "Mightyena",
      "type1": "Dark",
      "type2": ""
    },
    {
      "id": 263,
      "name": "Zigzagoon",
      "type1": "Normal",
      "type2": "",
      "evolution": [264] 
    },
    {
      "id": 20263,
      "name": "Zigzagoon (galarian)",
      "linkName": "zigzagoon",
      "type1": "Dark",
      "type2": "Normal",
      "evolution": [20264]
    },
    {
      "id": 264,
      "name": "Linoone",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 20264,
      "name": "Linoone (galarian)",
      "linkName": "linoone",
      "type1": "Dark",
      "type2": "Normal",
      "evolution": [862]
    },
    {
      "id": 265,
      "name": "Wurmple",
      "type1": "Bug",
      "type2": "",
      "evolution": [266,268]
    },
    {
      "id": 266,
      "name": "Silcoon",
      "type1": "Bug",
      "type2": "",
      "evolution": [267]
    },
    {
      "id": 267,
      "name": "Beautifly",
      "type1": "Bug",
      "type2": "Flying"
    },
    {
      "id": 268,
      "name": "Cascoon",
      "type1": "Bug",
      "type2": "",
      "evolution": [269]
    },
    {
      "id": 269,
      "name": "Dustox",
      "type1": "Bug",
      "type2": "Poison"
    },
    {
      "id": 270,
      "name": "Lotad",
      "type1": "Water",
      "type2": "Grass",
      "evolution": [271]
    },
    {
      "id": 271,
      "name": "Lombre",
      "type1": "Water",
      "type2": "Grass",
      "evolution": [272]
    },
    {
      "id": 272,
      "name": "Ludicolo",
      "type1": "Water",
      "type2": "Grass"
    },
    {
      "id": 273,
      "name": "Seedot",
      "type1": "Grass",
      "type2": "",
      "evolution": [274]
    },
    {
      "id": 274,
      "name": "Nuzleaf",
      "type1": "Grass",
      "type2": "Dark",
      "evolution": [275]
    },
    {
      "id": 275,
      "name": "Shiftry",
      "type1": "Grass",
      "type2": "Dark"
    },
    {
      "id": 276,
      "name": "Taillow",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": [277]
    },
    {
      "id": 277,
      "name": "Swellow",
      "type1": "Normal",
      "type2": "Flying"
    },
    {
      "id": 278,
      "name": "Wingull",
      "type1": "Water",
      "type2": "Flying",
      "evolution": [279]
    },
    {
      "id": 279,
      "name": "Pelipper",
      "type1": "Water",
      "type2": "Flying"
    },
    {
      "id": 280,
      "name": "Ralts",
      "type1": "Psychic",
      "type2": "Fairy",
      "evolution": [281]
    },
    {
      "id": 281,
      "name": "Kirlia",
      "type1": "Psychic",
      "type2": "Fairy",
      "evolution": [282, 475]
    },
    {
      "id": 282,
      "name": "Gardevoir",
      "type1": "Psychic",
      "type2": "Fairy"
    },
    {
      "id": 15282,
      "name": "Mega Gardevoir",
      "linkName": "gardevoir",
      "type1": "Psychic",
      "type2": "Fairy"
    },
    {
      "id": 283,
      "name": "Surskit",
      "type1": "Bug",
      "type2": "Water",
      "evolution": [284]
    },
    {
      "id": 284,
      "name": "Masquerain",
      "type1": "Bug",
      "type2": "Flying"
    },
    {
      "id": 285,
      "name": "Shroomish",
      "type1": "Grass",
      "type2": "",
      "evolution": [286]
    },
    {
      "id": 286,
      "name": "Breloom",
      "type1": "Grass",
      "type2": "Fighting"
    },
    {
      "id": 287,
      "name": "Slakoth",
      "type1": "Normal",
      "type2": "",
      "evolution": [288]
    },
    {
      "id": 288,
      "name": "Vigoroth",
      "type1": "Normal",
      "type2": "",
      "evolution": [289]
    },
    {
      "id": 289,
      "name": "Slaking",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 290,
      "name": "Nincada",
      "type1": "Bug",
      "type2": "Ground",
      "evolution": [291]
    },
    {
      "id": 291,
      "name": "Ninjask",
      "type1": "Bug",
      "type2": "Flying"
    },
    {
      "id": 292,
      "name": "Shedinja",
      "type1": "Bug",
      "type2": "Ghost"
    },
    {
      "id": 293,
      "name": "Whismur",
      "type1": "Normal",
      "type2": "",
      "evolution": [294]
    },
    {
      "id": 294,
      "name": "Loudred",
      "type1": "Normal",
      "type2": "",
      "evolution": [295]
    },
    {
      "id": 295,
      "name": "Exploud",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 296,
      "name": "Makuhita",
      "type1": "Fighting",
      "type2": "",
      "evolution": [297]
    },
    {
      "id": 297,
      "name": "Hariyama",
      "type1": "Fighting",
      "type2": ""
    },
    {
      "id": 298,
      "name": "Azurill",
      "type1": "Normal",
      "type2": "Fairy",
      "evolution": [183]
    },
    {
      "id": 299,
      "name": "Nosepass",
      "type1": "Rock",
      "type2": "",
      "evolution": [476]
    },
    {
      "id": 300,
      "name": "Skitty",
      "type1": "Normal",
      "type2": "",
      "evolution": [301]
    },
    {
      "id": 301,
      "name": "Delcatty",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 302,
      "name": "Sableye",
      "type1": "Dark",
      "type2": "Ghost"
    },
    {
      "id": 15302,
      "name": "Mega Sableye",
      "linkName": "sableye",
      "type1": "Dark",
      "type2": "Ghost"
    },
    {
      "id": 303,
      "name": "Mawile",
      "type1": "Steel",
      "type2": "Fairy"
    },
    {
      "id": 15303,
      "name": "Mega Mawile",
      "linkName": "mawile",
      "type1": "Steel",
      "type2": "Fairy"
    },
    {
      "id": 304,
      "name": "Aron",
      "type1": "Steel",
      "type2": "Rock",
      "evolution": [305]
    },
    {
      "id": 305,
      "name": "Lairon",
      "type1": "Steel",
      "type2": "Rock",
      "evolution": [306]
    },
    {
      "id": 306,
      "name": "Aggron",
      "type1": "Steel",
      "type2": "Rock"
    },
    {
      "id": 15306,
      "name": "Mega Aggron",
      "linkName": "aggron",
      "type1": "Steel",
      "type2": ""
    },
    {
      "id": 307,
      "name": "Meditite",
      "type1": "Fighting",
      "type2": "Psychic",
      "evolution": [308]
    },
    {
      "id": 308,
      "name": "Medicham",
      "type1": "Fighting",
      "type2": "Psychic"
    },
    {
      "id": 15308,
      "name": "Mega Medicham",
      "linkName": "medicham",
      "type1": "Fighting",
      "type2": "Psychic"
    },
    {
      "id": 309,
      "name": "Electrike",
      "type1": "Electric",
      "type2": "",
      "evolution": [310]
    },
    {
      "id": 310,
      "name": "Manectric",
      "type1": "Electric",
      "type2": ""
    },
    {
      "id": 15310,
      "name": "Mega Manectric",
      "linkName": "manectric",
      "type1": "Electric",
      "type2": ""
    },
    {
      "id": 311,
      "name": "Plusle",
      "type1": "Electric",
      "type2": ""
    },
    {
      "id": 312,
      "name": "Minun",
      "type1": "Electric",
      "type2": ""
    },
    {
      "id": 313,
      "name": "Volbeat",
      "type1": "Bug",
      "type2": ""
    },
    {
      "id": 314,
      "name": "Illumise",
      "type1": "Bug",
      "type2": ""
    },
    {
      "id": 315,
      "name": "Roselia",
      "type1": "Grass",
      "type2": "Poison",
      "evolution": [407]
    },
    {
      "id": 316,
      "name": "Gulpin",
      "type1": "Poison",
      "type2": "",
      "evolution": [317]
    },
    {
      "id": 317,
      "name": "Swalot",
      "type1": "Poison",
      "type2": ""
    },
    {
      "id": 318,
      "name": "Carvanha",
      "type1": "Water",
      "type2": "Dark",
      "evolution": [319]
    },
    {
      "id": 319,
      "name": "Sharpedo",
      "type1": "Water",
      "type2": "Dark"
    },
    {
      "id": 15319,
      "name": "Mega Sharpedo",
      "linkName": "sharpedo",
      "type1": "Water",
      "type2": "Dark"
    },
    {
      "id": 320,
      "name": "Wailmer",
      "type1": "Water",
      "type2": "",
      "evolution": [321]
    },
    {
      "id": 321,
      "name": "Wailord",
      "type1": "Water",
      "type2": ""
    },
    {
      "id": 322,
      "name": "Numel",
      "type1": "Fire",
      "type2": "Ground",
      "evolution": [323]
    },
    {
      "id": 323,
      "name": "Camerupt",
      "type1": "Fire",
      "type2": "Ground"
    },
    {
      "id": 15323,
      "name": "Mega Camerupt",
      "linkName": "camerupt",
      "type1": "Fire",
      "type2": "Ground"
    },
    {
      "id": 324,
      "name": "Torkoal",
      "type1": "Fire",
      "type2": ""
    },
    {
      "id": 325,
      "name": "Spoink",
      "type1": "Psychic",
      "type2": "",
      "evolution": [326]
    },
    {
      "id": 326,
      "name": "Grumpig",
      "type1": "Psychic",
      "type2": ""
    },
    {
      "id": 327,
      "name": "Spinda",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 328,
      "name": "Trapinch",
      "type1": "Ground",
      "type2": "",
      "evolution": [329]
    },
    {
      "id": 329,
      "name": "Vibrava",
      "type1": "Ground",
      "type2": "Dragon",
      "evolution": [330]
    },
    {
      "id": 330,
      "name": "Flygon",
      "type1": "Ground",
      "type2": "Dragon"
    },
    {
      "id": 331,
      "name": "Cacnea",
      "type1": "Grass",
      "type2": "",
      "evolution": [332]
    },
    {
      "id": 332,
      "name": "Cacturne",
      "type1": "Grass",
      "type2": "Dark"
    },
    {
      "id": 333,
      "name": "Swablu",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": [334]
    },
    {
      "id": 334,
      "name": "Altaria",
      "type1": "Dragon",
      "type2": "Flying"
    },
    {
      "id": 15334,
      "name": "Mega Altaria",
      "linkName": "altaria",
      "type1": "Dragon",
      "type2": "Fairy"
    },
    {
      "id": 335,
      "name": "Zangoose",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 336,
      "name": "Seviper",
      "type1": "Poison",
      "type2": ""
    },
    {
      "id": 337,
      "name": "Lunatone",
      "type1": "Rock",
      "type2": "Psychic"
    },
    {
      "id": 338,
      "name": "Solrock",
      "type1": "Rock",
      "type2": "Psychic"
    },
    {
      "id": 339,
      "name": "Barboach",
      "type1": "Water",
      "type2": "Ground",
      "evolution": [340]
    },
    {
      "id": 340,
      "name": "Whiscash",
      "type1": "Water",
      "type2": "Ground"
    },
    {
      "id": 341,
      "name": "Corphish",
      "type1": "Water",
      "type2": "",
      "evolution": [342]
    },
    {
      "id": 342,
      "name": "Crawdaunt",
      "type1": "Water",
      "type2": "Dark"
    },
    {
      "id": 343,
      "name": "Baltoy",
      "type1": "Ground",
      "type2": "Psychic",
      "evolution": [344]
    },
    {
      "id": 344,
      "name": "Claydol",
      "type1": "Ground",
      "type2": "Psychic"
    },
    {
      "id": 345,
      "name": "Lileep",
      "type1": "Rock",
      "type2": "Grass",
      "evolution": [346]
    },
    {
      "id": 346,
      "name": "Cradily",
      "type1": "Rock",
      "type2": "Grass"
    },
    {
      "id": 347,
      "name": "Anorith",
      "type1": "Rock",
      "type2": "Bug",
      "evolution": [348]
    },
    {
      "id": 348,
      "name": "Armaldo",
      "type1": "Rock",
      "type2": "Bug"
    },
    {
      "id": 349,
      "name": "Feebas",
      "type1": "Water",
      "type2": "",
      "evolution": [350]
    },
    {
      "id": 350,
      "name": "Milotic",
      "type1": "Water",
      "type2": ""
    },
    {
      "id": 351,
      "name": "Castform",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 352,
      "name": "Kecleon",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 353,
      "name": "Shuppet",
      "type1": "Ghost",
      "type2": "",
      "evolution": [354]
    },
    {
      "id": 354,
      "name": "Banette",
      "type1": "Ghost",
      "type2": ""
    },
    {
      "id": 15354,
      "name": "Mega Banette",
      "linkName": "banette",
      "type1": "Ghost",
      "type2": ""
    },
    {
      "id": 355,
      "name": "Duskull",
      "type1": "Ghost",
      "type2": "",
      "evolution": [356]
    },
    {
      "id": 356,
      "name": "Dusclops",
      "type1": "Ghost",
      "type2": "",
      "evolution": [477]
    },
    {
      "id": 357,
      "name": "Tropius",
      "type1": "Grass",
      "type2": "Flying"
    },
    {
      "id": 358,
      "name": "Chimecho",
      "type1": "Psychic",
      "type2": ""
    },
    {
      "id": 15358,
      "name": "Mega Chimecho",
      "linkName": "chimecho",
      "type1": "Psychic",
      "type2": "Steel"
    },
    {
      "id": 359,
      "name": "Absol",
      "type1": "Dark",
      "type2": ""
    },
    {
      "id": 15359,
      "name": "Mega Absol",
      "linkName": "absol",
      "type1": "Dark",
      "type2": ""
    },
    {
      "id": 17359,
      "name": "Mega Absol Z",
      "linkName": "absol",
      "type1": "Dark",
      "type2": "Ghost"
    },
    {
      "id": 360,
      "name": "Wynaut",
      "type1": "Psychic",
      "type2": "",
      "evolution": [202]
    },
    {
      "id": 361,
      "name": "Snorunt",
      "type1": "Ice",
      "type2": "",
      "evolution": [362, 478]
    },
    {
      "id": 362,
      "name": "Glalie",
      "type1": "Ice",
      "type2": ""
    },
    {
      "id": 15362,
      "name": "Mega Glalie",
      "linkName": "glalie",
      "type1": "Ice",
      "type2": ""
    },
    {
      "id": 363,
      "name": "Spheal",
      "type1": "Ice",
      "type2": "Water",
      "evolution": [364]
    },
    {
      "id": 364,
      "name": "Sealeo",
      "type1": "Ice",
      "type2": "Water",
      "evolution": [365]
    },
    {
      "id": 365,
      "name": "Walrein",
      "type1": "Ice",
      "type2": "Water"
    },
    {
      "id": 366,
      "name": "Clamperl",
      "type1": "Water",
      "type2": "",
      "evolution": [367, 368]
    },
    {
      "id": 367,
      "name": "Huntail",
      "type1": "Water",
      "type2": ""
    },
    {
      "id": 368,
      "name": "Gorebyss",
      "type1": "Water",
      "type2": ""
    },
    {
      "id": 369,
      "name": "Relicanth",
      "type1": "Water",
      "type2": "Rock"
    },
    {
      "id": 370,
      "name": "Luvdisc",
      "type1": "Water",
      "type2": ""
    },
    {
      "id": 371,
      "name": "Bagon",
      "type1": "Dragon",
      "type2": "",
      "evolution": [372]
    },
    {
      "id": 372,
      "name": "Shelgon",
      "type1": "Dragon",
      "type2": "",
      "evolution": [373]
    },
    {
      "id": 373,
      "name": "Salamence",
      "type1": "Dragon",
      "type2": "Flying"
    },
    {
      "id": 15373,
      "name": "Mega Salamence",
      "linkName": "salamence",
      "type1": "Dragon",
      "type2": "Flying"
    },
    {
      "id": 374,
      "name": "Beldum",
      "type1": "Steel",
      "type2": "Psychic",
      "evolution": [375]
    },
    {
      "id": 375,
      "name": "Metang",
      "type1": "Steel",
      "type2": "Psychic",
      "evolution": [376]
    },
    {
      "id": 376,
      "name": "Metagross",
      "type1": "Steel",
      "type2": "Psychic"
    },
    {
      "id": 15376,
      "name": "Mega Metagross",
      "linkName": "metagross",
      "type1": "Steel",
      "type2": "Psychic"
    },
    {
      "id": 377,
      "name": "Regirock",
      "type1": "Rock",
      "type2": ""
    },
    {
      "id": 378,
      "name": "Regice",
      "type1": "Ice",
      "type2": ""
    },
    {
      "id": 379,
      "name": "Registeel",
      "type1": "Steel",
      "type2": ""
    },
    {
      "id": 380,
      "name": "Latias",
      "type1": "Dragon",
      "type2": "Psychic"
    },
    {
      "id": 15380,
      "name": "Mega Latias",
      "linkName": "latias",
      "type1": "Dragon",
      "type2": "Psychic"
    },
    {
      "id": 381,
      "name": "Latios",
      "type1": "Dragon",
      "type2": "Psychic"
    },
    {
      "id": 15381,
      "name": "Mega Latios",
      "linkName": "latios",
      "type1": "Dragon",
      "type2": "Psychic"
    },
    {
      "id": 382,
      "name": "Kyogre",
      "type1": "Water",
      "type2": ""
    },
    {
      "id": 15382,
      "name": "Primal Kyogre",
      "linkName": "kyogre",
      "type1": "Water",
      "type2": ""
    },
    {
      "id": 383,
      "name": "Groudon",
      "type1": "Ground",
      "type2": ""
    },
    {
      "id": 15383,
      "name": "Primal Groudon",
      "linkName": "groudon",
      "type1": "Ground",
      "type2": "Fire"
    },
    {
      "id": 384,
      "name": "Rayquaza",
      "type1": "Dragon",
      "type2": "Flying"
    },
    {
      "id": 15384,
      "name": "Mega Rayquaza",
      "linkName": "rayquaza",
      "type1": "Dragon",
      "type2": "Flying"
    },
    {
      "id": 385,
      "name": "Jirachi",
      "type1": "Steel",
      "type2": "Psychic"
    },
    {
      "id": 386,
      "name": "Deoxys Normal",
      "type1": "Psychic",
      "type2": ""
    },
    {
      "id": 387,
      "name": "Turtwig",
      "type1": "Grass",
      "type2": "",
      "evolution": [388]
    },
    {
      "id": 388,
      "name": "Grotle",
      "type1": "Grass",
      "type2": "",
      "evolution": [389]
    },
    {
      "id": 389,
      "name": "Torterra",
      "type1": "Grass",
      "type2": "Ground"
    },
    {
      "id": 390,
      "name": "Chimchar",
      "type1": "Fire",
      "type2": "",
      "evolution": [391]
    },
    {
      "id": 391,
      "name": "Monferno",
      "type1": "Fire",
      "type2": "Fighting",
      "evolution": [392]
    },
    {
      "id": 392,
      "name": "Infernape",
      "type1": "Fire",
      "type2": "Fighting"
    },
    {
      "id": 393,
      "name": "Piplup",
      "type1": "Water",
      "type2": "",
      "evolution": [394]
    },
    {
      "id": 394,
      "name": "Prinplup",
      "type1": "Water",
      "type2": "",
      "evolution": [395]
    },
    {
      "id": 395,
      "name": "Empoleon",
      "type1": "Water",
      "type2": "Steel"
    },
    {
      "id": 396,
      "name": "Starly",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": [397]
    },
    {
      "id": 397,
      "name": "Staravia",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": [398]
    },
    {
      "id": 398,
      "name": "Staraptor",
      "type1": "Normal",
      "type2": "Flying"
    },
    {
      "id": 15398,
      "name": "Mega Staraptor",
      "linkName": "staraptor",
      "type1": "Fighting",
      "type2": "Flying"
    },
    {
      "id": 399,
      "name": "Bidoof",
      "type1": "Normal",
      "type2": "",
      "evolution": [400]
    },
    {
      "id": 400,
      "name": "Bibarel",
      "type1": "Normal",
      "type2": "Water"
    },
    {
      "id": 401,
      "name": "Kricketot",
      "type1": "Bug",
      "type2": "",
      "evolution": [402]
    },
    {
      "id": 402,
      "name": "Kricketune",
      "type1": "Bug",
      "type2": ""
    },
    {
      "id": 403,
      "name": "Shinx",
      "type1": "Electric",
      "type2": "",
      "evolution": [404]
    },
    {
      "id": 404,
      "name": "Luxio",
      "type1": "Electric",
      "type2": "",
      "evolution": [405]
    },
    {
      "id": 405,
      "name": "Luxray",
      "type1": "Electric",
      "type2": ""
    },
    {
      "id": 406,
      "name": "Budew",
      "type1": "Grass",
      "type2": "Poison",
      "evolution": [315]
    },
    {
      "id": 407,
      "name": "Roserade",
      "type1": "Grass",
      "type2": "Poison"
    },
    {
      "id": 408,
      "name": "Cranidos",
      "type1": "Rock",
      "type2": ""
    },
    {
      "id": 409,
      "name": "Rampardos",
      "type1": "Rock",
      "type2": "",
      "evolution": [410]
    },
    {
      "id": 410,
      "name": "Shieldon",
      "type1": "Rock",
      "type2": "Steel"
    },
    {
      "id": 411,
      "name": "Bastiodon",
      "type1": "Rock",
      "type2": "Steel"
    },
    {
      "id": 412,
      "name": "Burmy",
      "type1": "Bug",
      "type2": "",
      "evolution": [413, 414]
    },
    {
      "id": 413,
      "name": "Wormadam Plant",
      "type1": "Bug",
      "type2": "Grass"
    },
    {
      "id": 414,
      "name": "Mothim",
      "type1": "Bug",
      "type2": "Flying"
    },
    {
      "id": 415,
      "name": "Combee",
      "type1": "Bug",
      "type2": "Flying",
      "evolution": [416]
    },
    {
      "id": 416,
      "name": "Vespiquen",
      "type1": "Bug",
      "type2": "Flying"
    },
    {
      "id": 417,
      "name": "Pachirisu",
      "type1": "Electric",
      "type2": ""
    },
    {
      "id": 418,
      "name": "Buizel",
      "type1": "Water",
      "type2": "",
      "evolution": [419]
    },
    {
      "id": 419,
      "name": "Floatzel",
      "type1": "Water",
      "type2": ""
    },
    {
      "id": 420,
      "name": "Cherubi",
      "type1": "Grass",
      "type2": "",
      "evolution": [421]
    },
    {
      "id": 421,
      "name": "Cherrim",
      "type1": "Grass",
      "type2": ""
    },
    {
      "id": 422,
      "name": "Shellos",
      "type1": "Water",
      "type2": "",
      "evolution": [423]
    },
    {
      "id": 423,
      "name": "Gastrodon",
      "type1": "Water",
      "type2": "Ground"
    },
    {
      "id": 424,
      "name": "Ambipom",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 425,
      "name": "Drifloon",
      "type1": "Ghost",
      "type2": "Flying",
      "evolution": [426]
    },
    {
      "id": 426,
      "name": "Drifblim",
      "type1": "Ghost",
      "type2": "Flying"
    },
    {
      "id": 427,
      "name": "Buneary",
      "type1": "Normal",
      "type2": "",
      "evolution": [428]
    },
    {
      "id": 428,
      "name": "Lopunny",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 15428,
      "name": "Mega Lopunny",
      "linkName": "lopunny",
      "type1": "Ice",
      "type2": "Ghost"
    },
    {
      "id": 429,
      "name": "Mismagius",
      "type1": "Ghost",
      "type2": "",
    },
    {
      "id": 430,
      "name": "Honchkrow",
      "type1": "Dark",
      "type2": "Flying"
    },
    {
      "id": 431,
      "name": "Glameow",
      "type1": "Normal",
      "type2": "",
      "evolution": [432]
    },
    {
      "id": 432,
      "name": "Purugly",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 433,
      "name": "Chingling",
      "type1": "Psychic",
      "type2": "",
      "evolution": [358]
    },
    {
      "id": 434,
      "name": "Stunky",
      "type1": "Poison",
      "type2": "Dark",
      "evolution": [435]
    },
    {
      "id": 435,
      "name": "Skuntank",
      "type1": "Poison",
      "type2": "Dark"
    },
    {
      "id": 436,
      "name": "Bronzor",
      "type1": "Steel",
      "type2": "Psychic",
      "evolution": [437]
    },
    {
      "id": 437,
      "name": "Bronzong",
      "type1": "Steel",
      "type2": "Psychic"
    },
    {
      "id": 438,
      "name": "Bonsly",
      "type1": "Rock",
      "type2": "",
      "evolution": [185]
    },
    {
      "id": 439,
      "name": "Mime Jr",
      "type1": "Psychic",
      "type2": "Fairy",
      "evolution": [122, 20122]
    },
    {
      "id": 440,
      "name": "Happiny",
      "type1": "Normal",
      "type2": "",
      "evolution": [113]
    },
    {
      "id": 441,
      "name": "Chatot",
      "type1": "Normal",
      "type2": "Flying"
    },
    {
      "id": 442,
      "name": "Spiritomb",
      "type1": "Ghost",
      "type2": "Dark"
    },
    {
      "id": 443,
      "name": "Gible",
      "type1": "Dragon",
      "type2": "Ground",
      "evolution": [444]
    },
    {
      "id": 444,
      "name": "Gabite",
      "type1": "Dragon",
      "type2": "Ground",
      "evolution": [445]
    },
    {
      "id": 445,
      "name": "Garchomp",
      "type1": "Dragon",
      "type2": "Ground"
    },
    {
      "id": 446,
      "name": "Munchlax",
      "type1": "Normal",
      "type2": "",
      "evolution": [143]
    },
    {
      "id": 447,
      "name": "Riolu",
      "type1": "Fighting",
      "type2": "",
      "evolution": [448]
    },
    {
      "id": 448,
      "name": "Lucario",
      "type1": "Fighting",
      "type2": "Steel"
    },
    {
      "id": 15448,
      "name": "Mega Lucario",
      "linkName": "lucario",
      "type1": "Fighting",
      "type2": "Steel"
    },
    {
      "id": 17448,
      "name": "Mega Lucario Z",
      "linkName": "lucario",
      "type1": "Fighting",
      "type2": "Steel"
    },
    {
      "id": 449,
      "name": "Hippopotas",
      "type1": "Ground",
      "type2": "",
      "evolution": [450]
    },
    {
      "id": 450,
      "name": "Hippowdon",
      "type1": "Ground",
      "type2": ""
    },
    {
      "id": 451,
      "name": "Skorupi",
      "type1": "Poison",
      "type2": "Bug",
      "evolution": [452]
    },
    {
      "id": 452,
      "name": "Drapion",
      "type1": "Poison",
      "type2": "Dark"
    },
    {
      "id": 453,
      "name": "Croagunk",
      "type1": "Poison",
      "type2": "Fighting",
      "evolution": [454]
    },
    {
      "id": 454,
      "name": "Toxicroak",
      "type1": "Poison",
      "type2": "Fighting"
    },
    {
      "id": 455,
      "name": "Carnivine",
      "type1": "Grass",
      "type2": ""
    },
    {
      "id": 456,
      "name": "Finneon",
      "type1": "Water",
      "type2": "",
      "evolution": [457]
    },
    {
      "id": 457,
      "name": "Lumineon",
      "type1": "Water",
      "type2": ""
    },
    {
      "id": 458,
      "name": "Mantyke",
      "type1": "Water",
      "type2": "Flying",
      "evolution": [226]
    },
    {
      "id": 459,
      "name": "Snover",
      "type1": "Grass",
      "type2": "Ice",
      "evolution": [460]
    },
    {
      "id": 460,
      "name": "Abomasnow",
      "type1": "Grass",
      "type2": "Ice"
    },
    {
      "id": 15460,
      "name": "Mega Abomasnow",
      "linkName": "abomasnow",
      "type1": "Grass",
      "type2": "Ice"
    },
    {
      "id": 461,
      "name": "Weavile",
      "type1": "Dark",
      "type2": "Ice"
    },
    {
      "id": 462,
      "name": "Magnezone",
      "type1": "Electric",
      "type2": "Steel"
    },
    {
      "id": 463,
      "name": "Lickilicky",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 464,
      "name": "Rhyperior",
      "type1": "Ground",
      "type2": "Rock"
    },
    {
      "id": 465,
      "name": "Tangrowth",
      "type1": "Grass",
      "type2": ""
    },
    {
      "id": 466,
      "name": "Electivire",
      "type1": "Electric",
      "type2": ""
    },
    {
      "id": 467,
      "name": "Magmortar",
      "type1": "Fire",
      "type2": ""
    },
    {
      "id": 468,
      "name": "Togekiss",
      "type1": "Fairy",
      "type2": "Flying"
    },
    {
      "id": 469,
      "name": "Yanmega",
      "type1": "Bug",
      "type2": "Flying"
    },
    {
      "id": 470,
      "name": "Leafeon",
      "type1": "Grass",
      "type2": ""
    },
    {
      "id": 471,
      "name": "Glaceon",
      "type1": "Ice",
      "type2": ""
    },
    {
      "id": 472,
      "name": "Gliscor",
      "type1": "Ground",
      "type2": "Flying"
    },
    {
      "id": 473,
      "name": "Mamoswine",
      "type1": "Ice",
      "type2": "Ground"
    },
    {
      "id": 474,
      "name": "Porygon Z",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 475,
      "name": "Gallade",
      "type1": "Psychic",
      "type2": "Fighting"
    },
    {
      "id": 15475,
      "name": "Mega Gallade",
      "linkName": "gallade",
      "type1": "Psychic",
      "type2": "Fighting"
    },
    {
      "id": 476,
      "name": "Probopass",
      "type1": "Rock",
      "type2": "Steel"
    },
    {
      "id": 477,
      "name": "Dusknoir",
      "type1": "Ghost",
      "type2": ""
    },
    {
      "id": 478,
      "name": "Froslass",
      "type1": "Ice",
      "type2": "Ghost"
    },
    {
      "id": 15478,
      "name": "Mega Froslass",
      "linkName": "froslass",
      "type1": "Ice",
      "type2": "Ghost"
    },
    {
      "id": 479,
      "name": "Rotom",
      "type1": "Electric",
      "type2": "Ghost"
    },
    {
      "id": 40479,
      "name": "Heat Rotom",
      "type1": "Electric",
      "type2": "Fire"
    },
    {
      "id": 50479,
      "name": "Wash Rotom",
      "type1": "Electric",
      "type2": "Water"
    },
    {
      "id": 60479,
      "name": "Frost Rotom",
      "type1": "Electric",
      "type2": "Ice"
    },
    {
      "id": 70479,
      "name": "Fan Rotom",
      "type1": "Electric",
      "type2": "Flying"
    },
    {
      "id": 80479,
      "name": "Mow Rotom",
      "type1": "Electric",
      "type2": "Grass"
    },
    {
      "id": 480,
      "name": "Uxie",
      "type1": "Psychic",
      "type2": ""
    },
    {
      "id": 481,
      "name": "Mesprit",
      "type1": "Psychic",
      "type2": ""
    },
    {
      "id": 482,
      "name": "Azelf",
      "type1": "Psychic",
      "type2": ""
    },
    {
      "id": 483,
      "name": "Dialga",
      "type1": "Steel",
      "type2": "Dragon"
    },
    {
      "id": 484,
      "name": "Palkia",
      "type1": "Water",
      "type2": "Dragon"
    },
    {
      "id": 485,
      "name": "Heatran",
      "type1": "Fire",
      "type2": "Steel"
    },
    {
      "id": 15485,
      "name": "Mega Heatran",
      "linkName": "heatran",
      "type1": "Fire",
      "type2": "Steel"
    },
    {
      "id": 486,
      "name": "Regigigas",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 487,
      "name": "Giratina",
      "type1": "Ghost",
      "type2": "Dragon"
    },
    {
      "id": 488,
      "name": "Cresselia",
      "type1": "Psychic",
      "type2": ""
    },
    {
      "id": 489,
      "name": "Phione",
      "type1": "Water",
      "type2": ""
    },
    {
      "id": 490,
      "name": "Manaphy",
      "type1": "Water",
      "type2": ""
    },
    {
      "id": 491,
      "name": "Darkrai",
      "type1": "Dark",
      "type2": ""
    },
    {
      "id": 15491,
      "name": "Mega Darkrai",
      "linkName": "darkrai",
      "type1": "Dark",
      "type2": ""
    },
    {
      "id": 492,
      "name": "Shaymin",
      "type1": "Grass",
      "type2": ""
    },
    {
      "id": 493,
      "name": "Arceus",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 494,
      "name": "Victini",
      "type1": "Psychic",
      "type2": "Fire"
    },
    {
      "id": 495,
      "name": "Snivy",
      "type1": "Grass",
      "type2": "",
      "evolution": [496]
    },
    {
      "id": 496,
      "name": "Servine",
      "type1": "Grass",
      "type2": "",
      "evolution": [497]
    },
    {
      "id": 497,
      "name": "Serperior",
      "type1": "Grass",
      "type2": ""
    },
    {
      "id": 498,
      "name": "Tepig",
      "type1": "Fire",
      "type2": "",
      "evolution": [499]
    },
    {
      "id": 499,
      "name": "Pignite",
      "type1": "Fire",
      "type2": "Fighting",
      "evolution": [500]
    },
    {
      "id": 500,
      "name": "Emboar",
      "type1": "Fire",
      "type2": "Fighting"
    },
    {
      "id": 15500,
      "name": "Mega Emboar",
      "linkName": "emboar",
      "type1": "Fire",
      "type2": "Fighting"
    },
    {
      "id": 501,
      "name": "Oshawott",
      "type1": "Water",
      "type2": "",
     "evolution": [502] 
    },
    {
      "id": 502,
      "name": "Dewott",
      "type1": "Water",
      "type2": "",
      "evolution": [503]
    },
    {
      "id": 503,
      "name": "Samurott",
      "type1": "Water",
      "type2": ""
    },
    {
      "id": 30503,
      "name": "Samurott (hisuian)",
      "linkName": "samurott",
      "type1": "Water",
      "type2": "Dark"
    },
    {
      "id": 504,
      "name": "Patrat",
      "type1": "Normal",
      "type2": "",
      "evolution": [505]
    },
    {
      "id": 505,
      "name": "Watchog",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 506,
      "name": "Lillipup",
      "type1": "Normal",
      "type2": "",
      "evolution": [507]
    },
    {
      "id": 507,
      "name": "Herdier",
      "type1": "Normal",
      "type2": "",
      "evolution": [508]
    },
    {
      "id": 508,
      "name": "Stoutland",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 509,
      "name": "Purrloin",
      "type1": "Dark",
      "type2": "",
      "evolution": [510]
    },
    {
      "id": 510,
      "name": "Liepard",
      "type1": "Dark",
      "type2": ""
    },
    {
      "id": 511,
      "name": "Pansage",
      "type1": "Grass",
      "type2": "",
      "evolution": [512]
    },
    {
      "id": 512,
      "name": "Simisage",
      "type1": "Grass",
      "type2": ""
    },
    {
      "id": 513,
      "name": "Pansear",
      "type1": "Fire",
      "type2": "",
      "evolution": [514]
    },
    {
      "id": 514,
      "name": "Simisear",
      "type1": "Fire",
      "type2": ""
    },
    {
      "id": 515,
      "name": "Panpour",
      "type1": "Water",
      "type2": "",
      "evolution": [516]
    },
    {
      "id": 516,
      "name": "Simipour",
      "type1": "Water",
      "type2": ""
    },
    {
      "id": 517,
      "name": "Munna",
      "type1": "Psychic",
      "type2": "",
      "evolution": [518]
    },
    {
      "id": 518,
      "name": "Musharna",
      "type1": "Psychic",
      "type2": ""
    },
    {
      "id": 519,
      "name": "Pidove",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": [520]
    },
    {
      "id": 520,
      "name": "Tranquill",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": [521]
    },
    {
      "id": 521,
      "name": "Unfezant",
      "type1": "Normal",
      "type2": "Flying"
    },
    {
      "id": 522,
      "name": "Blitzle",
      "type1": "Electric",
      "type2": "",
      "evolution": [523]
    },
    {
      "id": 523,
      "name": "Zebstrika",
      "type1": "Electric",
      "type2": ""
    },
    {
      "id": 524,
      "name": "Roggenrola",
      "type1": "Rock",
      "type2": "",
      "evolution": [525]
    },
    {
      "id": 525,
      "name": "Boldore",
      "type1": "Rock",
      "type2": "",
      "evolution": [526]
    },
    {
      "id": 526,
      "name": "Gigalith",
      "type1": "Rock",
      "type2": ""
    },
    {
      "id": 527,
      "name": "Woobat",
      "type1": "Psychic",
      "type2": "Flying",
      "evolution": [528]
    },
    {
      "id": 528,
      "name": "Swoobat",
      "type1": "Psychic",
      "type2": "Flying"
    },
    {
      "id": 529,
      "name": "Drilbur",
      "type1": "Ground",
      "type2": "",
      "evolution": [530]
    },
    {
      "id": 530,
      "name": "Excadrill",
      "type1": "Ground",
      "type2": "Steel"
    },
    {
      "id": 15530,
      "name": "Mega Excadrill",
      "linkName": "excadrill",
      "type1": "Ground",
      "type2": "Steel"
    },
    {
      "id": 531,
      "name": "Audino",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 15531,
      "name": "Mega Audino",
      "linkName": "audino",
      "type1": "Normal",
      "type2": "Fairy"
    },
    {
      "id": 532,
      "name": "Timburr",
      "type1": "Fighting",
      "type2": "",
      "evolution": [533]
    },
    {
      "id": 533,
      "name": "Gurdurr",
      "type1": "Fighting",
      "type2": "",
      "evolution": [534]
    },
    {
      "id": 534,
      "name": "Conkeldurr",
      "type1": "Fighting",
      "type2": ""
    },
    {
      "id": 535,
      "name": "Tympole",
      "type1": "Water",
      "type2": "",
      "evolution": [536]
    },
    {
      "id": 536,
      "name": "Palpitoad",
      "type1": "Water",
      "type2": "Ground",
      "evolution": [537]
    },
    {
      "id": 537,
      "name": "Seismitoad",
      "type1": "Water",
      "type2": "Ground"
    },
    {
      "id": 538,
      "name": "Throh",
      "type1": "Fighting",
      "type2": ""
    },
    {
      "id": 539,
      "name": "Sawk",
      "type1": "Fighting",
      "type2": ""
    },
    {
      "id": 540,
      "name": "Sewaddle",
      "type1": "Bug",
      "type2": "Grass",
      "evolution": [541]
    },
    {
      "id": 541,
      "name": "Swadloon",
      "type1": "Bug",
      "type2": "Grass",
      "evolution": [542]
    },
    {
      "id": 542,
      "name": "Leavanny",
      "type1": "Bug",
      "type2": "Grass"
    },
    {
      "id": 543,
      "name": "Venipede",
      "type1": "Bug",
      "type2": "Poison",
      "evolution": [544]
    },
    {
      "id": 544,
      "name": "Whirlipede",
      "type1": "Bug",
      "type2": "Poison",
      "evolution": [545]
    },
    {
      "id": 545,
      "name": "Scolipede",
      "type1": "Bug",
      "type2": "Poison"
    },
    {
      "id": 15454,
      "name": "Mega Scolipede",
      "linkName": "scolipede",
      "type1": "Bug",
      "type2": "Poison"
    },
    {
      "id": 546,
      "name": "Cottonee",
      "type1": "Grass",
      "type2": "Fairy",
      "evolution": [547]
    },
    {
      "id": 547,
      "name": "Whimsicott",
      "type1": "Grass",
      "type2": "Fairy"
    },
    {
      "id": 548,
      "name": "Petilil",
      "type1": "Grass",
      "type2": "",
      "evolution": [549, 30549]
    },
    {
      "id": 549,
      "name": "Lilligant",
      "type1": "Grass",
      "type2": ""
    },
    {
      "id": 30549,
      "name": "Lilligant (hisuian)",
      "linkName": "lilligant",
      "type1": "Grass",
      "type2": "Fight"
    },
    {
      "id": 550,
      "name": "Basculin",
      "type1": "Water",
      "type2": "",
      "evolution": [902]
    },
    {
      "id": 551,
      "name": "Sandile",
      "type1": "Ground",
      "type2": "Dark",
      "evolution": [552]
    },
    {
      "id": 552,
      "name": "Krokorok",
      "type1": "Ground",
      "type2": "Dark",
      "evolution": [553]
    },
    {
      "id": 553,
      "name": "Krookodile",
      "type1": "Ground",
      "type2": "Dark"
    },
    {
      "id": 554,
      "name": "Darumaka",
      "type1": "Fire",
      "type2": "",
      "evolution": [555]
    },
    {
      "id": 20554,
      "name": "Darumaka (galarian)",
      "linkName": "darumaka",
      "type1": "Ice",
      "type2": "",
      "evolution": [20555]
    },
    {
      "id": 555,
      "name": "Darmanitan",
      "type1": "Fire",
      "type2": ""
    },
    {
      "id": 20555,
      "name": "Darmanitan (galarian)",
      "linkName": "darmanitan",
      "type1": "Ice",
      "type2": ""
    },
    {
      "id": 25555,
      "name": "Darmanitan (galarian)",
      "linkName": "darmanitan",
      "type1": "Ice",
      "type2": "Fire"
    },
    {
      "id": 556,
      "name": "Maractus",
      "type1": "Grass",
      "type2": ""
    },
    {
      "id": 557,
      "name": "Dwebble",
      "type1": "Bug",
      "type2": "Rock",
      "evolution": [558]
    },
    {
      "id": 558,
      "name": "Crustle",
      "type1": "Bug",
      "type2": "Rock"
    },
    {
      "id": 559,
      "name": "Scraggy",
      "type1": "Dark",
      "type2": "Fighting",
      "evolution": [560]
    },
    {
      "id": 560,
      "name": "Scrafty",
      "type1": "Dark",
      "type2": "Fighting"
    },
    {
      "id": 15560,
      "name": "Mega Scrafty",
      "linkName": "scrafty",
      "type1": "Ice",
      "type2": "Ghost"
    },
    {
      "id": 561,
      "name": "Sigilyph",
      "type1": "Psychic",
      "type2": "Flying"
    },
    {
      "id": 562,
      "name": "Yamask",
      "type1": "Ghost",
      "type2": "",
      "evolution": [563]
    },
    {
      "id": 20562,
      "name": "Yamask (galarian)",
      "linkName": "yamask",
      "type1": "Ground",
      "type2": "Ghost",
      "evolution": [867]
    },
    {
      "id": 563,
      "name": "Cofagrigus",
      "type1": "Ghost",
      "type2": ""
    },
    {
      "id": 564,
      "name": "Tirtouga",
      "type1": "Water",
      "type2": "Rock",
      "evolution": [565]
    },
    {
      "id": 565,
      "name": "Carracosta",
      "type1": "Water",
      "type2": "Rock"
    },
    {
      "id": 566,
      "name": "Archen",
      "type1": "Rock",
      "type2": "Flying",
      "evolution": [567]
    },
    {
      "id": 567,
      "name": "Archeops",
      "type1": "Rock",
      "type2": "Flying"
    },
    {
      "id": 568,
      "name": "Trubbish",
      "type1": "Poison",
      "type2": "",
      "evolution": [569]
    },
    {
      "id": 569,
      "name": "Garbodor",
      "type1": "Poison",
      "type2": ""
    },
    {
      "id": 570,
      "name": "Zorua",
      "type1": "Dark",
      "type2": "",
      "evolution": [571]
    },
    {
      "id": 30570,
      "name": "Zorua (hisuian)",
      "linkName": "zorua",
      "type1": "Normal",
      "type2": "Ghost",
      "evolution": [30059]
    },
    {
      "id": 571,
      "name": "Zoroark",
      "type1": "Dark",
      "type2": ""
    },
    {
      "id": 30571,
      "name": "Zoroark (hisuian)",
      "linkName": "zoroark",
      "type1": "Normal",
      "type2": "Ghost",
    },
    {
      "id": 572,
      "name": "Minccino",
      "type1": "Normal",
      "type2": "",
      "evolution": [573]
    },
    {
      "id": 573,
      "name": "Cinccino",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 574,
      "name": "Gothita",
      "type1": "Psychic",
      "type2": "",
      "evolution": [575]
    },
    {
      "id": 575,
      "name": "Gothorita",
      "type1": "Psychic",
      "type2": "",
      "evolution": [576]
    },
    {
      "id": 576,
      "name": "Gothitelle",
      "type1": "Psychic",
      "type2": ""
    },
    {
      "id": 577,
      "name": "Solosis",
      "type1": "Psychic",
      "type2": "",
      "evolution": [578]
    },
    {
      "id": 578,
      "name": "Duosion",
      "type1": "Psychic",
      "type2": "",
      "evolution": [579]
    },
    {
      "id": 579,
      "name": "Reuniclus",
      "type1": "Psychic",
      "type2": ""
    },
    {
      "id": 580,
      "name": "Ducklett",
      "type1": "Water",
      "type2": "Flying",
      "evolution": [581]
    },
    {
      "id": 581,
      "name": "Swanna",
      "type1": "Water",
      "type2": "Flying"
    },
    {
      "id": 582,
      "name": "Vanillite",
      "type1": "Ice",
      "type2": ""
    },
    {
      "id": 583,
      "name": "Vanillish",
      "type1": "Ice",
      "type2": "",
      "evolution": [584]
    },
    {
      "id": 584,
      "name": "Vanilluxe",
      "type1": "Ice",
      "type2": "",
      "evolution": [585]
    },
    {
      "id": 585,
      "name": "Deerling",
      "type1": "Normal",
      "type2": "Grass",
      "evolution": [586]
    },
    {
      "id": 586,
      "name": "Sawsbuck",
      "type1": "Normal",
      "type2": "Grass"
    },
    {
      "id": 587,
      "name": "Emolga",
      "type1": "Electric",
      "type2": "Flying"
    },
    {
      "id": 588,
      "name": "Karrablast",
      "type1": "Bug",
      "type2": "",
      "evolution": [589]
    },
    {
      "id": 589,
      "name": "Escavalier",
      "type1": "Bug",
      "type2": "Steel"
    },
    {
      "id": 590,
      "name": "Foongus",
      "type1": "Grass",
      "type2": "Poison",
      "evolution": [591]
    },
    {
      "id": 591,
      "name": "Amoonguss",
      "type1": "Grass",
      "type2": "Poison"
    },
    {
      "id": 592,
      "name": "Frillish",
      "type1": "Water",
      "type2": "Ghost",
      "evolution": [593]
    },
    {
      "id": 593,
      "name": "Jellicent",
      "type1": "Water",
      "type2": "Ghost"
    },
    {
      "id": 594,
      "name": "Alomomola",
      "type1": "Water",
      "type2": ""
    },
    {
      "id": 595,
      "name": "Joltik",
      "type1": "Bug",
      "type2": "Electric",
      "evolution": [596]
    },
    {
      "id": 596,
      "name": "Galvantula",
      "type1": "Bug",
      "type2": "Electric"
    },
    {
      "id": 597,
      "name": "Ferroseed",
      "type1": "Grass",
      "type2": "Steel",
      "evolution": [598]
    },
    {
      "id": 598,
      "name": "Ferrothorn",
      "type1": "Grass",
      "type2": "Steel"
    },
    {
      "id": 599,
      "name": "Klink",
      "type1": "Steel",
      "type2": "",
      "evolution": [600]
    },
    {
      "id": 600,
      "name": "Klang",
      "type1": "Steel",
      "type2": "",
      "evolution": [601]
    },
    {
      "id": 601,
      "name": "Klinklang",
      "type1": "Steel",
      "type2": ""
    },
    {
      "id": 602,
      "name": "Tynamo",
      "type1": "Electric",
      "type2": "",
      "evolution": [603]
    },
    {
      "id": 603,
      "name": "Eelektrik",
      "type1": "Electric",
      "type2": "",
      "evolution": [604]
    },
    {
      "id": 604,
      "name": "Eelektross",
      "type1": "Electric",
      "type2": ""
    },
    {
      "id": 15604,
      "name": "Mega Elektross",
      "linkName": "elektross",
      "type1": "Ice",
      "type2": "Ghost"
    },
    {
      "id": 605,
      "name": "Elgyem",
      "type1": "Psychic",
      "type2": "",
      "evolution": [606]
    },
    {
      "id": 606,
      "name": "Beheeyem",
      "type1": "Psychic",
      "type2": ""
    },
    {
      "id": 607,
      "name": "Litwick",
      "type1": "Ghost",
      "type2": "Fire",
      "evolution": [608]
    },
    {
      "id": 608,
      "name": "Lampent",
      "type1": "Ghost",
      "type2": "Fire",
      "evolution": [609]
    },
    {
      "id": 609,
      "name": "Chandelure",
      "type1": "Ghost",
      "type2": "Fire"
    },
    {
      "id": 15609,
      "name": "Mega Chandelure",
      "linkName": "chandelure",
      "type1": "Fire",
      "type2": "Ghost"
    },
    {
      "id": 610,
      "name": "Axew",
      "type1": "Dragon",
      "type2": "",
      "evolution": [611]
    },
    {
      "id": 611,
      "name": "Fraxure",
      "type1": "Dragon",
      "type2": "",
      "evolution": [612]
    },
    {
      "id": 612,
      "name": "Haxorus",
      "type1": "Dragon",
      "type2": ""
    },
    {
      "id": 613,
      "name": "Cubchoo",
      "type1": "Ice",
      "type2": "",
      "evolution": [614]
    },
    {
      "id": 614,
      "name": "Beartic",
      "type1": "Ice",
      "type2": ""
    },
    {
      "id": 615,
      "name": "Cryogonal",
      "type1": "Ice",
      "type2": ""
    },
    {
      "id": 616,
      "name": "Shelmet",
      "type1": "Bug",
      "type2": "",
      "evolution": [617]
    },
    {
      "id": 617,
      "name": "Accelgor",
      "type1": "Bug",
      "type2": ""
    },
    {
      "id": 618,
      "name": "Stunfisk",
      "type1": "Ground",
      "type2": "Electric"
    },
    {
      "id": 20618,
      "name": "Stunfisk (galarian)",
      "linkName": "stunfisk",
      "type1": "Ground",
      "type2": "Steel"
    },
    {
      "id": 619,
      "name": "Mienfoo",
      "type1": "Fighting",
      "type2": "",
      "evolution": [620]
    },
    {
      "id": 620,
      "name": "Mienshao",
      "type1": "Fighting",
      "type2": ""
    },
    {
      "id": 621,
      "name": "Druddigon",
      "type1": "Dragon",
      "type2": ""
    },
    {
      "id": 622,
      "name": "Golett",
      "type1": "Ground",
      "type2": "Ghost",
      "evolution": [623]
    },
    {
      "id": 623,
      "name": "Golurk",
      "type1": "Ground",
      "type2": "Ghost"
    },
    {
      "id": 15623,
      "name": "Mega Golurk",
      "linkName": "golurk",
      "type1": "Ground",
      "type2": "Ghost"
    },
    {
      "id": 624,
      "name": "Pawniard",
      "type1": "Dark",
      "type2": "Steel",
      "evolution": [625]
    },
    {
      "id": 625,
      "name": "Bisharp",
      "type1": "Dark",
      "type2": "Steel"
    },
    {
      "id": 626,
      "name": "Bouffalant",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 627,
      "name": "Rufflet",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": [628, 30628]
    },
    {
      "id": 628,
      "name": "Braviary",
      "type1": "Normal",
      "type2": "Flying"
    },
    {
      "id": 30628,
      "name": "Braviary (hisuian)",
      "linkName": "braviary",
      "type1": "Psychic",
      "type2": "Flying"
    },
    {
      "id": 629,
      "name": "Vullaby",
      "type1": "Dark",
      "type2": "Flying",
      "evolution": [630]
    },
    {
      "id": 630,
      "name": "Mandibuzz",
      "type1": "Dark",
      "type2": "Flying"
    },
    {
      "id": 631,
      "name": "Heatmor",
      "type1": "Fire",
      "type2": ""
    },
    {
      "id": 632,
      "name": "Durant",
      "type1": "Bug",
      "type2": "Steel"
    },
    {
      "id": 633,
      "name": "Deino",
      "type1": "Dark",
      "type2": "Dragon",
      "evolution": [634]
    },
    {
      "id": 634,
      "name": "Zweilous",
      "type1": "Dark",
      "type2": "Dragon",
      "evolution": [635]
    },
    {
      "id": 635,
      "name": "Hydreigon",
      "type1": "Dark",
      "type2": "Dragon"
    },
    {
      "id": 636,
      "name": "Larvesta",
      "type1": "Bug",
      "type2": "Fire",
      "evolution": [637]
    },
    {
      "id": 637,
      "name": "Volcarona",
      "type1": "Bug",
      "type2": "Fire"
    },
    {
      "id": 638,
      "name": "Cobalion",
      "type1": "Steel",
      "type2": "Fighting"
    },
    {
      "id": 639,
      "name": "Terrakion",
      "type1": "Rock",
      "type2": "Fighting"
    },
    {
      "id": 640,
      "name": "Virizion",
      "type1": "Grass",
      "type2": "Fighting"
    },
    {
      "id": 641,
      "name": "Tornadus",
      "type1": "Flying",
      "type2": ""
    },
    {
      "id": 642,
      "name": "Thundurus",
      "type1": "Electric",
      "type2": "Flying"
    },
    {
      "id": 643,
      "name": "Reshiram",
      "type1": "Dragon",
      "type2": "Fire"
    },
    {
      "id": 644,
      "name": "Zekrom",
      "type1": "Dragon",
      "type2": "Electric"
    },
    {
      "id": 645,
      "name": "Landorus",
      "type1": "Ground",
      "type2": "Flying"
    },
    {
      "id": 646,
      "name": "Kyurem",
      "type1": "Dragon",
      "type2": "Ice"
    },
    {
      "id": 647,
      "name": "Keldeo",
      "type1": "Water",
      "type2": "Fighting"
    },
    {
      "id": 648,
      "name": "Meloetta",
      "type1": "Normal",
      "type2": "Psychic"
    },
    {
      "id": 649,
      "name": "Genesect",
      "type1": "Bug",
      "type2": "Steel"
    },
    {
      "id": 650,
      "name": "Chespin",
      "type1": "Grass",
      "type2": "",
      "evolution": [651]
    },
    {
      "id": 651,
      "name": "Quilladin",
      "type1": "Grass",
      "type2": "",
      "evolution": [652]
    },
    {
      "id": 652,
      "name": "Chesnaught",
      "type1": "Grass",
      "type2": "Fighting"
    },
    {
      "id": 15652,
      "name": "Mega Chesnaught",
      "linkName": "chesnaught",
      "type1": "Grass",
      "type2": "Fighting"
    },
    {
      "id": 653,
      "name": "Fennekin",
      "type1": "Fire",
      "type2": "",
      "evolution": [654]
    },
    {
      "id": 654,
      "name": "Braixen",
      "type1": "Fire",
      "type2": "",
      "evolution": [655]
    },
    {
      "id": 655,
      "name": "Delphox",
      "type1": "Fire",
      "type2": "Psychic"
    },
    {
      "id": 15655,
      "name": "Mega Delphox",
      "linkName": "delphox",
      "type1": "Fire",
      "type2": "Psychic"
    },
    {
      "id": 656,
      "name": "Froakie",
      "type1": "Water",
      "type2": "",
      "evolution": [657]
    },
    {
      "id": 657,
      "name": "Frogadier",
      "type1": "Water",
      "type2": "",
      "evolution": [658]
    },
    {
      "id": 658,
      "name": "Greninja",
      "type1": "Water",
      "type2": "Dark"
    },
    {
      "id": 15658,
      "name": "Mega Greninja",
      "linkName": "greninja",
      "type1": "Water",
      "type2": "Dark"
    },
    {
      "id": 659,
      "name": "Bunnelby",
      "type1": "Normal",
      "type2": "",
      "evolution": [660]
    },
    {
      "id": 660,
      "name": "Diggersby",
      "type1": "Normal",
      "type2": "Ground"
    },
    {
      "id": 661,
      "name": "Fletchling",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": [662]
    },
    {
      "id": 662,
      "name": "Fletchinder",
      "type1": "Fire",
      "type2": "Flying",
      "evolution": [663]
    },
    {
      "id": 663,
      "name": "Talonflame",
      "type1": "Fire",
      "type2": "Flying"
    },
    {
      "id": 664,
      "name": "Scatterbug",
      "type1": "Bug",
      "type2": "",
      "evolution": [665]
    },
    {
      "id": 665,
      "name": "Spewpa",
      "type1": "Bug",
      "type2": "",
      "evolution": [666]
    },
    {
      "id": 666,
      "name": "Vivillon",
      "type1": "Bug",
      "type2": "Flying"
    },
    {
      "id": 667,
      "name": "Litleo",
      "type1": "Fire",
      "type2": "Normal",
      "evolution": [668]
    },
    {
      "id": 668,
      "name": "Pyroar",
      "type1": "Fire",
      "type2": "Normal"
    },
    {
      "id": 15668,
      "name": "Mega Pyroar",
      "linkName": "pyroar",
      "type1": "Fire",
      "type2": "Fighting"
    },
    {
      "id": 669,
      "name": "Flabebe",
      "type1": "Fairy",
      "type2": "",
      "evolution": [670]
    },
    {
      "id": 670,
      "name": "Floette",
      "type1": "Fairy",
      "type2": "",
      "evolution": [671]
    },
    {
      "id": 15670,
      "name": "Mega Floette",
      "linkName": "floette",
      "type1": "Fairy",
      "type2": ""
    },
    {
      "id": 671,
      "name": "Florges",
      "type1": "Fairy",
      "type2": ""
    },
    {
      "id": 672,
      "name": "Skiddo",
      "type1": "Grass",
      "type2": "",
      "evolution": [673]
    },
    {
      "id": 673,
      "name": "Gogoat",
      "type1": "Grass",
      "type2": ""
    },
    {
      "id": 674,
      "name": "Pancham",
      "type1": "Fighting",
      "type2": "",
      "evolution": [675]
    },
    {
      "id": 675,
      "name": "Pangoro",
      "type1": "Fighting",
      "type2": "Dark"
    },
    {
      "id": 676,
      "name": "Furfrou",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 677,
      "name": "Espurr",
      "type1": "Psychic",
      "type2": "",
      "evolution": [678]
    },
    {
      "id": 678,
      "name": "Meowstic",
      "type1": "Psychic",
      "type2": ""
    },
    {
      "id": 15678,
      "name": "Mega Meowstic",
      "linkName": "meowstic",
      "type1": "Psychic",
      "type2": ""
    },
    {
      "id": 679,
      "name": "Honedge",
      "type1": "Steel",
      "type2": "Ghost",
      "evolution": [680]
    },
    {
      "id": 680,
      "name": "Doublade",
      "type1": "Steel",
      "type2": "Ghost",
      "evolution": [681]
    },
    {
      "id": 681,
      "name": "Aegislash",
      "type1": "Steel",
      "type2": "Ghost"
    },
    {
      "id": 682,
      "name": "Spritzee",
      "type1": "Fairy",
      "type2": "",
      "evolution": [683]
    },
    {
      "id": 683,
      "name": "Aromatisse",
      "type1": "Fairy",
      "type2": ""
    },
    {
      "id": 684,
      "name": "Swirlix",
      "type1": "Fairy",
      "type2": "",
      "evolution": [685]
    },
    {
      "id": 685,
      "name": "Slurpuff",
      "type1": "Fairy",
      "type2": ""
    },
    {
      "id": 686,
      "name": "Inkay",
      "type1": "Dark",
      "type2": "Psychic",
      "evolution": [687]
    },
    {
      "id": 687,
      "name": "Malamar",
      "type1": "Dark",
      "type2": "Psychic"
    },
    {
      "id": 15687,
      "name": "Mega Malamar",
      "linkName": "malamar",
      "type1": "Dark",
      "type2": "Psychic"
    },
    {
      "id": 688,
      "name": "Binacle",
      "type1": "Rock",
      "type2": "Water",
      "evolution": [689]
    },
    {
      "id": 689,
      "name": "Barbaracle",
      "type1": "Rock",
      "type2": "Water"
    },
    {
      "id": 15689,
      "name": "Mega Barbaracle",
      "linkName": "barbaracle",
      "type1": "Rock",
      "type2": "Fighting"
    },
    {
      "id": 690,
      "name": "Skrelp",
      "type1": "Poison",
      "type2": "Water",
      "evolution": [691]
    },
    {
      "id": 691,
      "name": "Dragalge",
      "type1": "Poison",
      "type2": "Dragon"
    },
    {
      "id": 15691,
      "name": "Mega Dragalge",
      "linkName": "dragalge",
      "type1": "Poison",
      "type2": "Dragon"
    },
    {
      "id": 692,
      "name": "Clauncher",
      "type1": "Water",
      "type2": "",
      "evolution": [693]
    },
    {
      "id": 693,
      "name": "Clawitzer",
      "type1": "Water",
      "type2": ""
    },
    {
      "id": 694,
      "name": "Helioptile",
      "type1": "Electric",
      "type2": "Normal",
      "evolution": [695]
    },
    {
      "id": 695,
      "name": "Heliolisk",
      "type1": "Electric",
      "type2": "Normal"
    },
    {
      "id": 696,
      "name": "Tyrunt",
      "type1": "Rock",
      "type2": "Dragon",
      "evolution": [697]
    },
    {
      "id": 697,
      "name": "Tyrantrum",
      "type1": "Rock",
      "type2": "Dragon"
    },
    {
      "id": 698,
      "name": "Amaura",
      "type1": "Rock",
      "type2": "Ice",
      "evolution": [699]
    },
    {
      "id": 699,
      "name": "Aurorus",
      "type1": "Rock",
      "type2": "Ice"
    },
    {
      "id": 700,
      "name": "Sylveon",
      "type1": "Fairy",
      "type2": ""
    },
    {
      "id": 701,
      "name": "Hawlucha",
      "type1": "Fighting",
      "type2": "Flying"
    },
    {
      "id": 15701,
      "name": "Mega Hawlucha",
      "linkName": "hawlucha",
      "type1": "Fighting",
      "type2": "Flying"
    },
    {
      "id": 702,
      "name": "Dedenne",
      "type1": "Electric",
      "type2": "Fairy"
    },
    {
      "id": 703,
      "name": "Carbink",
      "type1": "Rock",
      "type2": "Fairy"
    },
    {
      "id": 704,
      "name": "Goomy",
      "type1": "Dragon",
      "type2": "",
      "evolution": [705, 30705]
    },
    {
      "id": 705,
      "name": "Sliggoo",
      "type1": "Dragon",
      "type2": "",
      "evolution": [706]
    },
    {
      "id": 30705,
      "name": "Sliggoo (hisuian)",
      "linkName": "sliggoo",
      "type1": "Steel",
      "type2": "Dragon",
      "evolution": [30706]
    },
    {
      "id": 706,
      "name": "Goodra",
      "type1": "Dragon",
      "type2": ""
    },
    {
      "id": 30706,
      "name": "Goodra (hisuian)",
      "linkName": "goodra",
      "type1": "Steel",
      "type2": "Dragon"
    },
    {
      "id": 707,
      "name": "Klefki",
      "type1": "Steel",
      "type2": "Fairy"
    },
    {
      "id": 708,
      "name": "Phantump",
      "type1": "Ghost",
      "type2": "Grass",
      "evolution": [709]
    },
    {
      "id": 709,
      "name": "Trevenant",
      "type1": "Ghost",
      "type2": "Grass"
    },
    {
      "id": 710,
      "name": "Pumpkaboo",
      "type1": "Ghost",
      "type2": "Grass",
      "evolution": [711]
    },
    {
      "id": 711,
      "name": "Gourgeist",
      "type1": "Ghost",
      "type2": "Grass"
    },
    {
      "id": 712,
      "name": "Bergmite",
      "type1": "Ice",
      "type2": "",
      "evolution": [713, 30713]
    },
    {
      "id": 713,
      "name": "Avalugg",
      "type1": "Ice",
      "type2": ""
    },
    {
      "id": 30713,
      "name": "Avalugg (hisuian)",
      "linkName": "avalugg",
      "type1": "ice",
      "type2": "Rock"
    },
    {
      "id": 714,
      "name": "Noibat",
      "type1": "Flying",
      "type2": "Dragon",
      "evolution": [715]
    },
    {
      "id": 715,
      "name": "Noivern",
      "type1": "Flying",
      "type2": "Dragon"
    },
    {
      "id": 716,
      "name": "Xerneas",
      "type1": "Fairy",
      "type2": ""
    },
    {
      "id": 717,
      "name": "Yveltal",
      "type1": "Dark",
      "type2": "Flying"
    },
    {
      "id": 718,
      "name": "Zygarde",
      "type1": "Dragon",
      "type2": "Ground"
    },
    {
      "id": 15718,
      "name": "Mega Zygarde",
      "linkName": "zygarde",
      "type1": "Dragon",
      "type2": "Ground"
    },
    {
      "id": 719,
      "name": "Diancie",
      "type1": "Rock",
      "type2": "Fairy"
    },
    {
      "id": 15719,
      "name": "Mega Diancie",
      "linkName": "diancie",
      "type1": "Rock",
      "type2": "Fairy"
    },
    {
      "id": 720,
      "name": "Hoopa",
      "type1": "Psychic",
      "type2": "Ghost"
    },
    {
      "id": 721,
      "name": "Volcanion",
      "type1": "Fire",
      "type2": "Water"
    },
    {
      "id": 722,
      "name": "Rowlet",
      "type1": "Grass",
      "type2": "Flying",
      "evolution": [723]
    },
    {
      "id": 723,
      "name": "Dartrix",
      "type1": "Grass",
      "type2": "Flying",
      "evolution": [724, 30724]
    },
    {
      "id": 724,
      "name": "Decidueye",
      "type1": "Grass",
      "type2": "Ghost"
    },
    {
      "id": 30724,
      "name": "Decidueye (hisuian)",
      "linkName": "decidueye",
      "type1": "Grass",
      "type2": "Fighting"
    },
    {
      "id": 725,
      "name": "Litten",
      "type1": "Fire",
      "type2": "",
      "evolution": [726]
    },
    {
      "id": 726,
      "name": "Torracat",
      "type1": "Fire",
      "type2": "",
      "evolution": [727]
    },
    {
      "id": 727,
      "name": "Incineroar",
      "type1": "Fire",
      "type2": "Dark"
    },
    {
      "id": 728,
      "name": "Popplio",
      "type1": "Water",
      "type2": "",
      "evolution": [729]
    },
    {
      "id": 729,
      "name": "Brionne",
      "type1": "Water",
      "type2": "",
      "evolution": [730]
    },
    {
      "id": 730,
      "name": "Primarina",
      "type1": "Water",
      "type2": "Fairy"
    },
    {
      "id": 731,
      "name": "Pikipek",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": [732]
    },
    {
      "id": 732,
      "name": "Trumbeak",
      "type1": "Normal",
      "type2": "Flying",
      "evolution": [733]
    },
    {
      "id": 733,
      "name": "Toucannon",
      "type1": "Normal",
      "type2": "Flying"
    },
    {
      "id": 734,
      "name": "Yungoos",
      "type1": "Normal",
      "type2": "",
      "evolution": [735]
    },
    {
      "id": 735,
      "name": "Gumshoos",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 736,
      "name": "Grubbin",
      "type1": "Bug",
      "type2": "",
      "evolution": [737]
    },
    {
      "id": 737,
      "name": "Charjabug",
      "type1": "Bug",
      "type2": "Electric",
      "evolution": [738]
    },
    {
      "id": 738,
      "name": "Vikavolt",
      "type1": "Bug",
      "type2": "Electric"
    },
    {
      "id": 739,
      "name": "Crabrawler",
      "type1": "Fighting",
      "type2": "",
      "evolution": [740]
    },
    {
      "id": 740,
      "name": "Crabominable",
      "type1": "Fighting",
      "type2": "Ice"
    },
    {
      "id": 15740,
      "name": "Mega Crabominable",
      "linkName": "crabominable",
      "type1": "Fighting",
      "type2": "Ice"
    },
    {
      "id": 741,
      "name": "Oricorio Baile",
      "type1": "Fire",
      "type2": "Flying"
    },
    {
      "id": 742,
      "name": "Cutiefly",
      "type1": "Bug",
      "type2": "Fairy",
      "evolution": [743]
    },
    {
      "id": 743,
      "name": "Ribombee",
      "type1": "Bug",
      "type2": "Fairy"
    },
    {
      "id": 744,
      "name": "Rockruff",
      "type1": "Rock",
      "type2": "",
      "evolution": [745]
    },
    {
      "id": 745,
      "name": "Lycanroc",
      "type1": "Rock",
      "type2": ""
    },
    {
      "id": 746,
      "name": "Wishiwashi",
      "type1": "Water",
      "type2": ""
    },
    {
      "id": 747,
      "name": "Mareanie",
      "type1": "Poison",
      "type2": "Water",
      "evolution": [748]
    },
    {
      "id": 748,
      "name": "Toxapex",
      "type1": "Poison",
      "type2": "Water"
    },
    {
      "id": 749,
      "name": "Mudbray",
      "type1": "Ground",
      "type2": "",
      "evolution": [750]
    },
    {
      "id": 750,
      "name": "Mudsdale",
      "type1": "Ground",
      "type2": ""
    },
    {
      "id": 751,
      "name": "Dewpider",
      "type1": "Water",
      "type2": "Bug",
      "evolution": [752]
    },
    {
      "id": 752,
      "name": "Araquanid",
      "type1": "Water",
      "type2": "Bug"
    },
    {
      "id": 753,
      "name": "Fomantis",
      "type1": "Grass",
      "type2": "",
      "evolution": [754]
    },
    {
      "id": 754,
      "name": "Lurantis",
      "type1": "Grass",
      "type2": ""
    },
    {
      "id": 755,
      "name": "Morelull",
      "type1": "Grass",
      "type2": "Fairy",
      "evolution": [756]
    },
    {
      "id": 756,
      "name": "Shiinotic",
      "type1": "Grass",
      "type2": "Fairy"
    },
    {
      "id": 757,
      "name": "Salandit",
      "type1": "Poison",
      "type2": "Fire",
      "evolution": [758]
    },
    {
      "id": 758,
      "name": "Salazzle",
      "type1": "Poison",
      "type2": "Fire"
    },
    {
      "id": 759,
      "name": "Stufful",
      "type1": "Normal",
      "type2": "Fighting",
      "evolution": [760]
    },
    {
      "id": 760,
      "name": "Bewear",
      "type1": "Normal",
      "type2": "Fighting"
    },
    {
      "id": 761,
      "name": "Bounsweet",
      "type1": "Grass",
      "type2": "",
      "evolution": [762]
    },
    {
      "id": 762,
      "name": "Steenee",
      "type1": "Grass",
      "type2": "",
      "evolution": [763]
    },
    {
      "id": 763,
      "name": "Tsareena",
      "type1": "Grass",
      "type2": ""
    },
    {
      "id": 764,
      "name": "Comfey",
      "type1": "Fairy",
      "type2": ""
    },
    {
      "id": 765,
      "name": "Oranguru",
      "type1": "Normal",
      "type2": "Psychic"
    },
    {
      "id": 766,
      "name": "Passimian",
      "type1": "Fighting",
      "type2": ""
    },
    {
      "id": 767,
      "name": "Wimpod",
      "type1": "Bug",
      "type2": "Water",
      "evolution": [768] 
    },
    {
      "id": 768,
      "name": "Golisopod",
      "type1": "Bug",
      "type2": "Water"
    },
    {
      "id": 15768,
      "name": "Mega Golisopod",
      "linkName": "golisopod",
      "type1": "Bug",
      "type2": "Steel"
    },
    {
      "id": 769,
      "name": "Sandygast",
      "type1": "Ghost",
      "type2": "Ground",
      "evolution": [770]
    },
    {
      "id": 770,
      "name": "Palossand",
      "type1": "Ghost",
      "type2": "Ground"
    },
    {
      "id": 771,
      "name": "Pyukumuku",
      "type1": "Water",
      "type2": ""
    },
    {
      "id": 772,
      "name": "Type Null",
      "type1": "Normal",
      "type2": "",
      "evolution": [773]
    },
    {
      "id": 773,
      "name": "Silvally",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 774,
      "name": "Minior",
      "type1": "Rock",
      "type2": "Flying"
    },
    {
      "id": 775,
      "name": "Komala",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 776,
      "name": "Turtonator",
      "type1": "Fire",
      "type2": "Dragon"
    },
    {
      "id": 777,
      "name": "Togedemaru",
      "type1": "Electric",
      "type2": "Steel"
    },
    {
      "id": 778,
      "name": "Mimikyu",
      "type1": "Ghost",
      "type2": "Fairy"
    },
    {
      "id": 779,
      "name": "Bruxish",
      "type1": "Water",
      "type2": "Psychic"
    },
    {
      "id": 780,
      "name": "Drampa",
      "type1": "Normal",
      "type2": "Dragon"
    },
    {
      "id": 15780,
      "name": "Mega Drampa",
      "linkName": "drampa",
      "type1": "Normal",
      "type2": "Dragon"
    },
    {
      "id": 781,
      "name": "Dhelmise",
      "type1": "Ghost",
      "type2": "Grass"
    },
    {
      "id": 782,
      "name": "Jangmo O",
      "type1": "Dragon",
      "type2": "",
      "evolution": [783]
    },
    {
      "id": 783,
      "name": "Hakamo O",
      "type1": "Dragon",
      "type2": "Fighting",
      "evolution": [784]
    },
    {
      "id": 784,
      "name": "Kommo O",
      "type1": "Dragon",
      "type2": "Fighting"
    },
    {
      "id": 785,
      "name": "Tapu Koko",
      "type1": "Electric",
      "type2": "Fairy"
    },
    {
      "id": 786,
      "name": "Tapu Lele",
      "type1": "Psychic",
      "type2": "Fairy"
    },
    {
      "id": 787,
      "name": "Tapu Bulu",
      "type1": "Grass",
      "type2": "Fairy"
    },
    {
      "id": 788,
      "name": "Tapu Fini",
      "type1": "Water",
      "type2": "Fairy"
    },
    {
      "id": 789,
      "name": "Cosmog",
      "type1": "Psychic",
      "type2": "",
      "evolution": [790]
    },
    {
      "id": 790,
      "name": "Cosmoem",
      "type1": "Psychic",
      "type2": "",
      "evolution": [791, 792]
    },
    {
      "id": 791,
      "name": "Solgaleo",
      "type1": "Psychic",
      "type2": "Steel"
    },
    {
      "id": 792,
      "name": "Lunala",
      "type1": "Psychic",
      "type2": "Ghost"
    },
    {
      "id": 793,
      "name": "Nihilego",
      "type1": "Rock",
      "type2": "Poison"
    },
    {
      "id": 794,
      "name": "Buzzwole",
      "type1": "Bug",
      "type2": "Fighting"
    },
    {
      "id": 795,
      "name": "Pheromosa",
      "type1": "Bug",
      "type2": "Fighting"
    },
    {
      "id": 796,
      "name": "Xurkitree",
      "type1": "Electric",
      "type2": ""
    },
    {
      "id": 797,
      "name": "Celesteela",
      "type1": "Steel",
      "type2": "Flying"
    },
    {
      "id": 798,
      "name": "Kartana",
      "type1": "Grass",
      "type2": "Steel"
    },
    {
      "id": 799,
      "name": "Guzzlord",
      "type1": "Dark",
      "type2": "Dragon"
    },
    {
      "id": 800,
      "name": "Necrozma",
      "type1": "Psychic",
      "type2": ""
    },
    {
      "id": 801,
      "name": "Magearna",
      "type1": "Steel",
      "type2": "Fairy"
    },
    {
      "id": 15801,
      "name": "Mega Magearna",
      "linkName": "magearna",
      "type1": "Steel",
      "type2": "Fairy"
    },
    {
      "id": 802,
      "name": "Marshadow",
      "type1": "Fighting",
      "type2": "Ghost"
    },
    {
      "id": 803,
      "name": "Poipole",
      "type1": "Poison",
      "type2": "",
      "evolution": [804]
    },
    {
      "id": 804,
      "name": "Naganadel",
      "type1": "Poison",
      "type2": "Dragon"
    },
    {
      "id": 805,
      "name": "Stakataka",
      "type1": "Rock",
      "type2": "Steel"
    },
    {
      "id": 806,
      "name": "Blacephalon",
      "type1": "Fire",
      "type2": "Ghost"
    },
    {
      "id": 807,
      "name": "Zeraora",
      "type1": "Electric",
      "type2": ""
    },
    {
      "id": 15807,
      "name": "Mega Zeraora",
      "linkName": "zeraora",
      "type1": "Electric",
      "type2": ""
    },
    {
      "id": 808,
      "name": "Meltan",
      "type1": "Steel",
      "type2": "",
      "evolution": [809]
    },
    {
      "id": 809,
      "name": "Melmetal",
      "type1": "Steel",
      "type2": ""
    },
    {
      "id": 810,
      "name": "Grookey",
      "type1": "Grass",
      "type2": "",
      "evolution": [811]
    },
    {
      "id": 811,
      "name": "Thwackey",
      "type1": "Grass",
      "type2": "",
      "evolution": [812] 
    },
    {
      "id": 812,
      "name": "Rillaboom",
      "type1": "Grass",
      "type2": ""
    },
    {
      "id": 813,
      "name": "Scorbunny",
      "type1": "Fire",
      "type2": "",
      "evolution": [814]
    },
    {
      "id": 814,
      "name": "Raboot",
      "type1": "Fire",
      "type2": "",
      "evolution": [815]
    },
    {
      "id": 815,
      "name": "Cinderace",
      "type1": "Fire",
      "type2": ""
    },
    {
      "id": 816,
      "name": "Sobble",
      "type1": "Water",
      "type2": "",
      "evolution": [817]
    },
    {
      "id": 817,
      "name": "Drizzile",
      "type1": "Water",
      "type2": "",
      "evolution": [818]
    },
    {
      "id": 818,
      "name": "Inteleon",
      "type1": "Water",
      "type2": ""
    },
    {
      "id": 819,
      "name": "Skwovet",
      "type1": "Normal",
      "type2": "",
      "evolution": [820]
    },
    {
      "id": 820,
      "name": "Greedent",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 821,
      "name": "Rookidee",
      "type1": "Flying",
      "type2": "",
      "evolution": [822]
    },
    {
      "id": 822,
      "name": "Corvisquire",
      "type1": "Flying",
      "type2": "",
      "evolution": [823]
    },
    {
      "id": 823,
      "name": "Corviknight",
      "type1": "Flying",
      "type2": "Steel"
    },
    {
      "id": 824,
      "name": "Blipbug",
      "type1": "Bug",
      "type2": "",
      "evolution": [825]
    },
    {
      "id": 825,
      "name": "Dottler",
      "type1": "Bug",
      "type2": "Psychic",
      "evolution": [826]
    },
    {
      "id": 826,
      "name": "Orbeetle",
      "type1": "Bug",
      "type2": "Psychic"
    },
    {
      "id": 827,
      "name": "Nickit",
      "type1": "Dark",
      "type2": "",
      "evolution": [828]
    },
    {
      "id": 828,
      "name": "Thievul",
      "type1": "Dark",
      "type2": ""
    },
    {
      "id": 829,
      "name": "Gossifleur",
      "type1": "Grass",
      "type2": "",
      "evolution": [830]
    },
    {
      "id": 830,
      "name": "Eldegoss",
      "type1": "Grass",
      "type2": ""
    },
    {
      "id": 831,
      "name": "Wooloo",
      "type1": "Normal",
      "type2": "",
      "evolution": [832]
    },
    {
      "id": 832,
      "name": "Dubwool",
      "type1": "Normal",
      "type2": ""
    },
    {
      "id": 833,
      "name": "Chewtle",
      "type1": "Water",
      "type2": "",
      "evolution": [834]
    },
    {
      "id": 834,
      "name": "Drednaw",
      "type1": "Water",
      "type2": "Rock"
    },
    {
      "id": 835,
      "name": "Yamper",
      "type1": "Electric",
      "type2": "",
      "evolution": [836]
    },
    {
      "id": 836,
      "name": "Boltund",
      "type1": "Electric",
      "type2": ""
    },
    {
      "id": 837,
      "name": "Rolycoly",
      "type1": "Rock",
      "type2": "",
      "evolution": [838]
    },
    {
      "id": 838,
      "name": "Carkol",
      "type1": "Rock",
      "type2": "Fire",
      "evolution": [839]
    },
    {
      "id": 839,
      "name": "Coalossal",
      "type1": "Rock",
      "type2": "Fire"
    },
    {
      "id": 840,
      "name": "Applin",
      "type1": "Grass",
      "type2": "Dragon",
      "evolution": [841, 842]
    },
    {
      "id": 841,
      "name": "Flapple",
      "type1": "Grass",
      "type2": "Dragon"
    },
    {
      "id": 842,
      "name": "Appletun",
      "type1": "Grass",
      "type2": "Dragon"
    },
    {
      "id": 843,
      "name": "Silicobra",
      "type1": "Ground",
      "type2": "",
      "evolution": [844]
    },
    {
      "id": 844,
      "name": "Sandaconda",
      "type1": "Ground",
      "type2": ""
    },
    {
      "id": 845,
      "name": "Cramorant",
      "type1": "Flying",
      "type2": "Water"
    },
    {
      "id": 846,
      "name": "Arrokuda",
      "type1": "Water",
      "type2": "",
      "evolution": [847]
    },
    {
      "id": 847,
      "name": "Barraskewda",
      "type1": "Water",
      "type2": ""
    },
    {
      "id": 848,
      "name": "Toxel",
      "type1": "Electric",
      "type2": "Poison",
      "evolution": [849]
    },
    {
      "id": 849,
      "name": "Toxtricity",
      "type1": "Electric",
      "type2": "Poison"
    },
    {
      "id": 850,
      "name": "Sizzlipede",
      "type1": "Fire",
      "type2": "Bug",
      "evolution": [851]
    },
    {
      "id": 851,
      "name": "Centiskorch",
      "type1": "Fire",
      "type2": "Bug"
    },
    {
      "id": 852,
      "name": "Clobbopus",
      "type1": "Fighting",
      "type2": "",
      "evolution": [853]
    },
    {
      "id": 853,
      "name": "Grapploct",
      "type1": "Fighting",
      "type2": ""
    },
    {
      "id": 854,
      "name": "Sinistea",
      "type1": "Ghost",
      "type2": "",
      "evolution": [855]
    },
    {
      "id": 855,
      "name": "Polteageist",
      "type1": "Ghost",
      "type2": ""
    },
    {
      "id": 856,
      "name": "Hatenna",
      "type1": "Psychic",
      "type2": "",
      "evolution": [857]
    },
    {
      "id": 857,
      "name": "Hattrem",
      "type1": "Psychic",
      "type2": "",
      "evolution": [858]
    },
    {
      "id": 858,
      "name": "Hatterene",
      "type1": "Psychic",
      "type2": "Fairy"
    },
    {
      "id": 859,
      "name": "Impidimp",
      "type1": "Dark",
      "type2": "Fairy",
      "evolution": [860]
    },
    {
      "id": 860,
      "name": "Morgrem",
      "type1": "Dark",
      "type2": "Fairy",
      "evolution": [861]
    },
    {
      "id": 861,
      "name": "Grimmsnarl",
      "type1": "Dark",
      "type2": "Fairy"
    },
    {
      "id": 862,
      "name": "Obstagoon",
      "type1": "Dark",
      "type2": "Normal"
    },
    {
      "id": 863,
      "name": "Perrserker",
      "type1": "Steel",
      "type2": ""
    },
    {
      "id": 864,
      "name": "Cursola",
      "type1": "Ghost",
      "type2": ""
    },
    {
      "id": 865,
      "name": "Sirfetchd",
      "type1": "Fighting",
      "type2": ""
    },
    {
      "id": 866,
      "name": "Mr Rime",
      "type1": "Ice",
      "type2": "Psychic"
    },
    {
      "id": 867,
      "name": "Runerigus",
      "type1": "Ground",
      "type2": "Ghost"
    },
    {
      "id": 868,
      "name": "Milcery",
      "type1": "Fairy",
      "type2": "",
      "evolution": [869]
    },
    {
      "id": 869,
      "name": "Alcremie",
      "type1": "Fairy",
      "type2": ""
    },
    {
      "id": 870,
      "name": "Falinks",
      "type1": "Fighting",
      "type2": ""
    },
    {
      "id": 15870,
      "name": "Mega Falinks",
      "linkName": "falinks",
      "type1": "Fighting",
      "type2": ""
    },
    {
      "id": 871,
      "name": "Pincurchin",
      "type1": "Electric",
      "type2": ""
    },
    {
      "id": 872,
      "name": "Snom",
      "type1": "Ice",
      "type2": "Bug",
      "evolution": [873]
    },
    {
      "id": 873,
      "name": "Frosmoth",
      "type1": "Ice",
      "type2": "Bug"
    },
    {
      "id": 874,
      "name": "Stonjourner",
      "type1": "Rock",
      "type2": ""
    },
    {
      "id": 875,
      "name": "Eiscue",
      "type1": "Ice",
      "type2": ""
    },
    {
      "id": 876,
      "name": "Indeedee",
      "type1": "Psychic",
      "type2": "Normal"
    },
    {
      "id": 877,
      "name": "Morpeko",
      "type1": "Electric",
      "type2": "Dark"
    },
    {
      "id": 878,
      "name": "Cufant",
      "type1": "Steel",
      "type2": "",
      "evolution": [879]
    },
    {
      "id": 879,
      "name": "Copperajah",
      "type1": "Steel",
      "type2": ""
    },
    {
      "id": 880,
      "name": "Dracozolt",
      "type1": "Electric",
      "type2": "Dragon"
    },
    {
      "id": 881,
      "name": "Arctozolt",
      "type1": "Electric",
      "type2": "Ice"
    },
    {
      "id": 882,
      "name": "Dracovish",
      "type1": "Water",
      "type2": "Dragon"
    },
    {
      "id": 883,
      "name": "Arctovish",
      "type1": "Water",
      "type2": "Ice"
    },
    {
      "id": 884,
      "name": "Duraludon",
      "type1": "Steel",
      "type2": "Dragon"
    },
    {
      "id": 885,
      "name": "Dreepy",
      "type1": "Dragon",
      "type2": "Ghost",
      "evolution": [886]
    },
    {
      "id": 886,
      "name": "Drakloak",
      "type1": "Dragon",
      "type2": "Ghost",
      "evolution": [887]
    },
    {
      "id": 887,
      "name": "Dragapult",
      "type1": "Dragon",
      "type2": "Ghost"
    },
    {
      "id": 888,
      "name": "Zacian",
      "type1": "Fairy",
      "type2": ""
    },
    {
      "id": 889,
      "name": "Zamazenta",
      "type1": "Fighting",
      "type2": ""
    },
    {
      "id": 890,
      "name": "Eternatus",
      "type1": "Poison",
      "type2": "Dragon"
    },
    {
      "id": 891,
      "name": "Kubfu",
      "type1": "Fighting",
      "type2": "",
      "evolution": [892, 11892]
    },
    {
      "id": 892,
      "name": "Urshifu (single)",
      'linkName': "urshifu",
      "type1": "Fighting",
      "type2": "Dark"
    },
    {
      "id": 11892,
      "name": "Urshifu (rapid)",
      'linkName': "urshifu",
      "type1": "Fighting",
      "type2": "Water"
    },
    {
      "id": 893,
      "name": "Zarude",
      "type1": "Dark",
      "type2": "Grass"
    },
    {
      "id": 894,
      "name": "Regieleki",
      "type1": "Electric",
      "type2": ""
    },
    {
      "id": 895,
      "name": "Regidrago",
      "type1": "Dragon",
      "type2": ""
    },
    {
      "id": 896,
      "name": "Glastrier",
      "type1": "Ice",
      "type2": ""
    },
    {
      "id": 897,
      "name": "Spectrier",
      "type1": "Ghost",
      "type2": ""
    },
    {
      "id": 898,
      "name": "Calyrex",
      "type1": "Psychic",
      "type2": "Grass"
    },
    {
      "id": 899,
      "name": "Wyrdeer",
      "type1": "Normal",
      "type2": "Psychic"
    },
    {
      "id": 900,
      "name": "Kleavor",
      "type1": "Bug",
      "type2": "Rock"
    },
    {
      "id": 901,
      "name": "Ursaluna",
      "type1": "Ground",
      "type2": "Normal"
    },
    {
      "id": 902,
      "name": "Basculegion",
      "type1": "Water",
      "type2": "Ghost"
    },
    {
      "id": 903,
      "name": "Sneasler",
      "type1": "Fighting",
      "type2": "Poison"
    },
    {
      "id": 904,
      "name": "Overqwil",
      "type1": "Dark",
      "type2": "Poison"
    },
    {
      "id": 905,
      "name": "Enamorus",
      "type1": "Fairy",
      "type2": "Flying"
    },
  ];

  public getPokemonList() : Array<Pokemon> {
    return this.pokemonList;
  }
}

export interface Pokemon {
  id : number;
  linkName ?: string;
  name : string;
  evolution?: Array<number>;
  type1 ?: string;
  type2 ?: string;
}
