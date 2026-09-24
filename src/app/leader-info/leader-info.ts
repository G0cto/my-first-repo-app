import { Component, Input } from '@angular/core';

export interface GymLeader {
  name: string;
  age: number;
  location: string;
  pokemon: string;
  badge: string;
  motto: string;
  image: string;
  background: string;
}

@Component({
  selector: 'app-leader-info',
  standalone: true,
  imports: [],
  templateUrl: './leader-info.html',
  styleUrl: './leader-info.css'
})
export class LeaderInfo {

  @Input() leader!: GymLeader;

  showMotto: boolean = false;

  toggleMotto(): void {
    this.showMotto = !this.showMotto;
  }
}