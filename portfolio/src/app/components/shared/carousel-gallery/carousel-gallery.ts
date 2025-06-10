import { CommonModule } from '@angular/common';
import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-carousel-gallery',
  imports: [CommonModule],
  templateUrl: './carousel-gallery.html',
  styleUrl: './carousel-gallery.scss',
})
export class CarouselGallery {
  @Input() imgList = [];

  centerIndex = 2;
  dragging = false;
  startX = 0;
  dragThreshold = 50;

  getStyleForCard(index: number): { [key: string]: string } {
    const offset = index - this.centerIndex;
    if (Math.abs(offset) > 2) return { display: 'none' };

    const scale = 1 - Math.abs(offset) * 0.15;
    const translateX = offset * 260;
    const zIndex = 10 - Math.abs(offset);
    const opacity = 1 - Math.abs(offset) * 0.3;

    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      zIndex: `${zIndex}`,
      opacity: `${opacity}`,
      display: 'block',
    };
  }

  onPointerDown(event: PointerEvent) {
    this.dragging = true;
    this.startX = event.clientX;
  }

  onPointerMove(event: PointerEvent) {
    if (!this.dragging) return;
    const delta = event.clientX - this.startX;
    if (delta > this.dragThreshold) {
      this.prev();
      this.dragging = false;
    } else if (delta < -this.dragThreshold) {
      this.next();
      this.dragging = false;
    }
  }

  onPointerUp() {
    this.dragging = false;
  }

  next() {
    this.centerIndex = (this.centerIndex + 1) % this.imgList.length;
  }

  prev() {
    this.centerIndex =
      (this.centerIndex - 1 + this.imgList.length) % this.imgList.length;
  }
}
