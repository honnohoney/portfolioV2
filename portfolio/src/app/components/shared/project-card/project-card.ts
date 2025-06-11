import { Component, Input } from '@angular/core';
import { TagType } from '../models/project-tag.model';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  @Input() projectDetail: {
    title: string;
    desc: string;
    image: string;
    tag?: TagType[];
  } = {
    title: '',
    desc: '',
    image: '',
  };
}
