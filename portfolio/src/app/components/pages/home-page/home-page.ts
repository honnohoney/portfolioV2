import { Component } from '@angular/core';
import { CarouselGallery } from '../../shared/carousel-gallery/carousel-gallery';

@Component({
  selector: 'app-home-page',
  imports: [CarouselGallery],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {
 imgList = [
  '../../../../assets/img/person/elephant.jpg',
  '../../../../assets/img/person/purple-skirt.jpg',
  '../../../../assets/img/person/pink-flowers.jpg',
  '../../../../assets/img/person/red-flowers.jpg',
 ]
}
