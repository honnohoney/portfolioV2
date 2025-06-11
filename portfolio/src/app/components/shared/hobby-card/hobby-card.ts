import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hobby-card',
  imports: [],
  templateUrl: './hobby-card.html',
  styleUrl: './hobby-card.scss',
})
export class HobbyCard {
  @Input() hobby: { title: string; desc: string; image: string } = {
    title: '',
    desc: '',
    image: '',
  };
}
