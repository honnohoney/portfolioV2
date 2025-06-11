import { Component } from '@angular/core';
import { ProjectCard } from '../../shared/project-card/project-card';
import { MatMenuModule } from '@angular/material/menu';
import { TagType, TagDisplayText } from '../../shared/models/project-tag.model';

@Component({
  selector: 'app-project-page',
  imports: [ProjectCard, MatMenuModule],
  templateUrl: './project-page.html',
  styleUrl: './project-page.scss',
})
export class ProjectPage {
  selectedOption = 0;

  projectList = [
    {
      title: 'Frontend dev project',
      desc: ' Frontend project i did when i was an employee as Frontend developer',
      image: '',
      tag: [TagType.WEBSITE],
    },
    {
      title: '3D Models sculpting',
      desc: "3D model I'm currently practicing",
      image: '',
      tag: [TagType.THREE_D],
    },
    {
      title: '2D drawing',
      desc: ' My drawing project',
      image: '',
      tag: [TagType.DRAWING],
    },
  ];

  menuOptions = [
    {
      name: TagDisplayText[TagType.ALL],
      type: TagType.ALL,
    },
    {
      name: TagDisplayText[TagType.WEBSITE],
      type: TagType.WEBSITE,
    },
    {
      name: TagDisplayText[TagType.THREE_D],
      type: TagType.THREE_D,
    },
    {
      name: TagDisplayText[TagType.DRAWING],
      type: TagType.DRAWING,
    },
  ];

  onSelectOption(index: number) {
    this.selectedOption = index;
  }
}
