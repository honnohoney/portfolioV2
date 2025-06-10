import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Timeline } from '../../shared/timeline/timeline';

@Component({
  selector: 'app-about-me-page',
  imports: [CommonModule, Timeline],
  templateUrl: './about-me-page.html',
  styleUrl: './about-me-page.scss'
})
export class AboutMePage {
  tagList = [
    {
      text: 'Reader',
      color: '#B36A45',
    },
    {
      text: 'Gamer',
      color: '#EB2363',
    },
    {
      text: 'Writer',
      color: '#55ABBE',
    },
    {
      text: 'Drawer',
      color: '#9F01F0',
    },
    {
      text: 'Crocheter',
      color: '#EF6CF3',
    },
    {
      text: 'Stretch',
      color: '#50AF45',
    },
    {
      text: 'Polite',
      color: '#60B4F4',
    },
    {
      text: 'Honest',
      color: '#F46060',
    },
  ]

  timelineList = [
    {
      year: '2021',
      text: 'completed vocational certificate in IT department',
    },
    {
      year: '2024',
      text: 'completed high vocational certificate in IT department & get a first job as an Frontend developer',
    },
    {
      year: '2025',
      text: 'Completed 1 year and 1 month as a Frontend Developer.  Now exploring diverse growth opportunities.',
    },
  ]
}
