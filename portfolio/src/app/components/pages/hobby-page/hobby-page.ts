import { Component } from '@angular/core';
import { HobbyCard } from '../../shared/hobby-card/hobby-card';

@Component({
  selector: 'app-hobby-page',
  imports: [HobbyCard],
  templateUrl: './hobby-page.html',
  styleUrl: './hobby-page.scss'
})
export class HobbyPage {

}
