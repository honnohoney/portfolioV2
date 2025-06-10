import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  imports: [CommonModule],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss',
})
export class ContactPage {
  mainContacts = [
    { type: 'GITHUB', url: 'https://github.com/honnohoney' },
    { type: 'FACEBOOK', url: 'https://www.facebook.com/profile.php?id=100092000528523' },
    { type: 'INSTAGRAM', url: 'https://www.instagram.com/honnohoney/' },
  ];

  contacts = [
    { type: 'MAIL', text: 'hanuera.khim@gmail.com' },
    { type: 'PHONE', text: '+66997620997' },
    { type: 'LOCATION', text: 'Loei, Thailand' },
  ];

 copiedMessage = {
    x: 0,
    y: 0,
    show: false,
  };

  goToPage(url: string) {
    window.open(url, '_blank');
  }

  async copyToClipboard(event: MouseEvent, text: string) {
    try {
      await navigator.clipboard.writeText(text);
      this.copiedMessage = {
        x: event.clientX,
        y: event.clientY,
        show: true,
      };
      setTimeout(() => {
        this.copiedMessage.show = false;
      }, 1200);
    } catch (err) {
      console.error('Clipboard copy failed:', err);
    }
  }
}
