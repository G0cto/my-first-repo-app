import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  gymLeaders = [
    {
      name: 'Roxanne',
      team: ['Geodude', 'Nosepass'],
      items: ['Potion']
    },
    {
      name: 'Brawly',
      team: ['Machop', 'Makuhita'],
      items: ['Potion']
    },
    {
      name: 'Wattson',
      team: ['Magnemite', 'Voltorb', 'Magneton'],
      items: ['Potion']
    },
    {
      name: 'Flannery',
      team: ['Slugma', 'Numel', 'Torkoal'],
      items: ['Hyper Potion']
    },
    {
      name: 'Norman',
      team: ['Slaking', 'Vigoroth', 'Linoone'],
      items: ['Hyper Potion']
    }
  ];

}