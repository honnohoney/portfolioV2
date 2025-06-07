import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  imports: [],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss',
})
export class ContactPage {
  mainContacts = [
    {
      type: 'GITHUB',
      url: 'https://github.com/honnohoney',
    },
    {
      type: 'FACEBOOK',
      url: 'https://www.facebook.com/profile.php?id=100092000528523',
    },
    {
      type: 'INSTAGRAM',
      url: 'https://www.instagram.com/honnohoney/',
    },
  ];

  contacts = [
    {
      type: 'MAIL',
      text: 'hanuera.khim@gmail.com',
    },
    {
      type: 'PHONE',
      text: '+66997620997',
    },
    {
      type: 'LOCATION',
      text: 'Loei, Thailand',
    },
  ];
}
