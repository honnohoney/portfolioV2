import { Component } from '@angular/core';
import { HobbyCard } from '../../shared/hobby-card/hobby-card';

@Component({
  selector: 'app-hobby-page',
  imports: [HobbyCard],
  templateUrl: './hobby-page.html',
  styleUrl: './hobby-page.scss',
})
export class HobbyPage {
  hobbyList = [
    {
      title: 'Crochet',
      desc: 'i’ve crocheting some cute stuff, bag, cute gloves etc...',
      image: '../../../../assets/img/hobby/crochet.jpg',
    },
    {
      title: 'Reading',
      desc: 'i enjoy reading philosophy, psychology, horror, thriller',
      image: '../../../../assets/img/hobby/books-copy.jpg',
    },
    {
      title: 'Gaming',
      desc: 'i enjoy playing online game like fps, action-survival horror game',
      image: '../../../../assets/img/hobby/game.png',
    },
  ];
}
