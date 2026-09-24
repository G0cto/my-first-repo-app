import { Component } from '@angular/core';

import { LeaderInfo, GymLeader } from '../leader-info/leader-info';

@Component({
  selector: 'app-johto',
  standalone: true,
  imports: [LeaderInfo],
  templateUrl: './johto.html',
  styleUrl: './johto.css'
})
export class Johto {

  gymLeaders: GymLeader[] = [

    {
      name: 'Falkner',
      age: 18,
      location: 'Violet City',
      pokemon: 'Pidgey, Pidgeotto',
      badge: 'Zephyr Badge',
      motto: 'Rise above your limits and soar beyond the ordinary.',
      image: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Spr_HGSS_Falkner.png',
      background: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Violet_Gym_HGSS.png'
    },

    {
      name: 'Bugsy',
      age: 14,
      location: 'Azalea Town',
      pokemon: 'Metapod, Kakuna, Scyther',
      badge: 'Hive Badge',
      motto: 'Even the smallest fighter can achieve great things.',
      image: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Spr_HGSS_Bugsy.png',
      background: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Azalea_Gym_HGSS.png'
    },

    {
      name: 'Whitney',
      age: 16,
      location: 'Goldenrod City',
      pokemon: 'Clefairy, Miltank',
      badge: 'Plain Badge',
      motto: 'Fight with confidence, smile with pride, and never give up.',
      image: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Spr_HGSS_Whitney.png',
      background: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Goldenrod_Gym_HGSS.png'
    },

    {
      name: 'Morty',
      age: 18,
      location: 'Ecruteak City',
      pokemon: 'Gastly, Haunter, Haunter, Gengar',
      badge: 'Fog Badge',
      motto: 'Face your fears, and they will lose their power over you.',
      image: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Spr_HGSS_Morty.png',
      background: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Ecruteak_Gym_HGSS.png'
    },

    {
      name: 'Chuck',
      age: 35,
      location: 'Cianwood City',
      pokemon: 'Primeape, Poliwrath',
      badge: 'Storm Badge',
      motto: 'Train hard, fight harder, and never surrender.',
      image: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Spr_HGSS_Chuck.png',
      background: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Cianwood_Gym_HGSS.png'
    },

    {
      name: 'Jasmine',
      age: 18,
      location: 'Olivine City',
      pokemon: 'Magnemite, Magnemite, Steelix',
      badge: 'Mineral Badge',
      motto: 'True strength is built through patience, courage, and resilience.',
      image: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Spr_HGSS_Jasmine.png',
      background: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Olivine_Gym_HGSS.png'
    },

    {
      name: 'Pryce',
      age: 70,
      location: 'Mahogany Town',
      pokemon: 'Seel, Dewgong, Piloswine',
      badge: 'Glacier Badge',
      motto: 'Stay calm and steady, even when the battle turns cold.',
      image: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Spr_HGSS_Pryce.png',
      background: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Mahogany_Gym_HGSS.png'
    },

    {
      name: 'Clair',
      age: 23,
      location: 'Blackthorn City',
      pokemon: 'Dragonair, Dragonair, Kingdra',
      badge: 'Rising Badge',
      motto: 'Only those who master their strength can reach true greatness.',
      image: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Spr_HGSS_Clair.png',
      background: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Blackthorn_Gym_HGSS.png'
    }

  ];
}