import { Component } from '@angular/core';
import { ProjectCard } from '../../shared/project-card/project-card';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-project-page',
  imports: [ProjectCard, MatMenuModule],
  templateUrl: './project-page.html',
  styleUrl: './project-page.scss',
})
export class ProjectPage {}
