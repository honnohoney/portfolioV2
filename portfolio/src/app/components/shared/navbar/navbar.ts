import { Component, ElementRef, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  imports: [],
})
export class Navbar implements OnInit {
  selectedType: string = 'HOME';
  menuList = [
    { type: 'HOBBY', tooltip: 'Hobbies' },
    { type: 'CONTACT', tooltip: 'Contacts' },
    { type: 'HOME', tooltip: 'Home' },
    { type: 'PROJECT', tooltip: 'Projects' },
    { type: 'ABOUT_ME', tooltip: 'About me' },
  ];

  private urlToTypeMap: Record<string, string> = {
    '': 'HOME',
    about: 'ABOUT_ME',
    contact: 'CONTACT',
    hobby: 'HOBBY',
    project: 'PROJECT',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getSelectedMenuByRoute();
  }

  navigateTo(type: string): void {
    const pathMap: Record<string, string> = {
      HOME: '',
      ABOUT_ME: 'about',
      CONTACT: 'contact',
      HOBBY: 'hobby',
      PROJECT: 'project',
    };
    this.router.navigate([pathMap[type] ?? '']);
  }

  selectMenu(type: string, event: Event): void {
    this.selectedType = type;
    this.navigateTo(type);
  }

  getSelectedMenuByRoute() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const urlSegment = event.urlAfterRedirects.split('/')[1] ?? '';
        this.selectedType = this.urlToTypeMap[urlSegment] ?? 'HOME';
      });
  }
}
