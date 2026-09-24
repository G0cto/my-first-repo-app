import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home').then(component => component.Home)
  },
  {
    path: 'kanto',
    loadComponent: () =>
      import('./kanto/kanto').then(component => component.Kanto)
  },
  {
    path: 'johto',
    loadComponent: () =>
      import('./johto/johto').then(component => component.Johto)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];