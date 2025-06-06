import { Routes } from '@angular/router';
import { HomePage, AboutMePage, ContactPage, HobbyPage, ProjectPage } from './components/pages';

export const routes: Routes = [
  { path: '', component: HomePage, pathMatch: 'full' },
  { path: 'about', component: AboutMePage },
  { path: 'contact', component: ContactPage },
  { path: 'hobby', component: HobbyPage },
  { path: 'project', component: ProjectPage },
  { path: '**', redirectTo: '' }
];