import { Component } from '@angular/core';

import { LeaderInfo, GymLeader } from '../leader-info/leader-info';

@Component({
  selector: 'app-kanto',
  standalone: true,
  imports: [LeaderInfo],
  templateUrl: './kanto.html',
  styleUrl: './kanto.css'
})
export class Kanto {

  gymLeaders: GymLeader[] = [

    {
      name: 'Brock',
      age: 15,
      location: 'Pewter City',
      pokemon: 'Geodude, Onix',
      badge: 'Boulder Badge',
      motto: 'Stand firm, and let your strength become unbreakable.',
      image: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Spr_HGSS_Brock.png',
      background: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Pewter_Gym_HGSS.png'
    },

    {
      name: 'Misty',
      age: 12,
      location: 'Cerulean City',
      pokemon: 'Staryu, Starmie',
      badge: 'Cascade Badge',
      motto: 'Flow with confidence, strike with precision.',
      image: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Spr_HGSS_Misty.png',
      background: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Cerulean_Gym_HGSS.png'
    },

    {
      name: 'Lt. Surge',
      age: 35,
      location: 'Vermilion City',
      pokemon: 'Voltorb, Pikachu, Raichu',
      badge: 'Thunder Badge',
      motto: 'Charge forward! Hesitation is your greatest weakness.',
      image: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Spr_HGSS_Lt_Surge.png',
      background: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Vermilion_Gym_HGSS.png'
    },

    {
      name: 'Erika',
      age: 18,
      location: 'Celadon City',
      pokemon: 'Victreebel, Tangela, Vileplume',
      badge: 'Rainbow Badge',
      motto: 'Patience and grace can overcome even the strongest storm.',
      image: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Spr_HGSS_Erika.png',
      background: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Celadon_Gym_HGSS.png'
    },

    {
      name: 'Koga',
      age: 40,
      location: 'Fuchsia City',
      pokemon: 'Koffing, Muk, Koffing, Weezing',
      badge: 'Soul Badge',
      motto: 'Move like a shadow, strike before your opponent can react.',
      image: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Spr_HGSS_Koga.png',
      background: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Fuchsia_Gym_HGSS.png'
    },

    {
      name: 'Sabrina',
      age: 21,
      location: 'Saffron City',
      pokemon: 'Mr. Mime, Kadabra, Venomoth, Alakazam',
      badge: 'Marsh Badge',
      motto: 'The mind that remains calm will always see the path ahead.',
      image: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Spr_HGSS_Sabrina.png',
      background: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Saffron_Gym_HGSS.png'
    },

    {
      name: 'Blaine',
      age: 58,
      location: 'Cinnabar Island',
      pokemon: 'Growlithe, Ponyta, Rapidash, Arcanine',
      badge: 'Volcano Badge',
      motto: 'Let your passion burn brighter than any flame.',
      image: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Spr_HGSS_Blaine.png',
      background: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Cinnabar_Gym_HGSS.png'
    },

    {
      name: 'Giovanni',
      age: 40,
      location: 'Viridian City',
      pokemon: 'Rhyhorn, Dugtrio, Nidoqueen, Nidoking, Rhydon',
      badge: 'Earth Badge',
      motto: 'Power means nothing without the will to control it.',
      image: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Spr_HGSS_Giovanni.png',
      background: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Viridian_Gym_HGSS.png'
    }

  ];
}