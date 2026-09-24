import { Injectable } from '@angular/core';

export interface HoennGymLeader {
  name: string;
  team: string[];
  items: string[];
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  gymLeaders: HoennGymLeader[] = [
    {
      name: 'Roxanne',
      team: ['Geodude', 'Nosepass'],
      items: ['Potion'],
      image: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Spr_RS_Roxanne.png'
    },

    {
      name: 'Brawly',
      team: ['Machop', 'Makuhita'],
      items: ['Potion'],
      image: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Spr_RS_Brawly.png'
    },

    {
      name: 'Wattson',
      team: ['Magnemite', 'Voltorb', 'Magneton'],
      items: ['Potion'],
      image: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Spr_RS_Wattson.png'
    },

    {
      name: 'Flannery',
      team: ['Slugma', 'Numel', 'Torkoal'],
      items: ['Potion'],
      image: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Spr_RS_Flannery.png'
    },

    {
      name: 'Norman',
      team: ['Slaking', 'Vigoroth', 'Linoone'],
      items: ['Potion'],
      image: 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Spr_RS_Norman.png'
    }
  ];
}