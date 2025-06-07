import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  imports: [],
})
export class Navbar {
  navbarContainerRef!: ElementRef;

  selectedType: string = 'HOME';
  menuList = [
    { type: 'HOBBY', tooltip: 'Hobbies' },
    { type: 'CONTACT', tooltip: 'Contacts' },
    { type: 'HOME', tooltip: 'Home' },
    { type: 'PROJECT', tooltip: 'Projects' },
    { type: 'ABOUT_ME', tooltip: 'About me' },
  ];

  constructor(private router: Router) {}

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
}
