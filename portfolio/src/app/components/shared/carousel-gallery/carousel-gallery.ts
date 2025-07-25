// carousel-gallery.ts
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-gallery.html',
  styleUrls: ['./carousel-gallery.scss'],
})
export class CarouselGallery {
  @Input() imgList: string[] = [];

  centerIndex = 2;
  dragging = false;
  startX = 0;
  dragOffsetX = 0;
  dragThreshold = 30; // reduced threshold
  atEdgeDrag = false;

  getStyleForCard(index: number): { [key: string]: string } {
    const offset = index - this.centerIndex;
    if (Math.abs(offset) > 3) return { display: 'none' };

    const scale = 1 - Math.abs(offset) * 0.1;
    const baseGap = window.innerWidth < 768 ? 170 : 220;
    let translateX = offset * baseGap;
    const zIndex = 10 - Math.abs(offset);
    const opacity = 1 - Math.abs(offset) * 0.25;

    if (offset === 0 && this.atEdgeDrag) {
      translateX += this.dragOffsetX * 0.25;
    }

    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      zIndex: `${zIndex}`,
      opacity: `${Math.max(opacity, 0.2)}`,
      display: 'block',
      transition: this.dragging ? 'none' : 'transform 0.3s ease',
    };
  }

  onPointerDown(event: PointerEvent) {
    this.dragging = true;
    this.startX = event.clientX;
    this.dragOffsetX = 0;
    this.atEdgeDrag = false;
  }

  onPointerMove(event: PointerEvent) {
    if (!this.dragging) return;
    this.dragOffsetX = event.clientX - this.startX;

    const isAtFirst = this.centerIndex === 0 && this.dragOffsetX > 0;
    const isAtLast = this.centerIndex === this.imgList.length - 1 && this.dragOffsetX < 0;
    this.atEdgeDrag = isAtFirst || isAtLast;
  }

  onPointerUp() {
    if (!this.dragging) return;

    const shouldLoopNext = this.dragOffsetX < -this.dragThreshold && this.centerIndex === this.imgList.length - 1;
    const shouldLoopPrev = this.dragOffsetX > this.dragThreshold && this.centerIndex === 0;

    const canGoPrev = this.dragOffsetX > this.dragThreshold && this.centerIndex > 0;
    const canGoNext = this.dragOffsetX < -this.dragThreshold && this.centerIndex < this.imgList.length - 1;

    if (canGoPrev) {
      this.prev();
    } else if (canGoNext) {
      this.next();
    } else if (shouldLoopNext) {
      this.centerIndex = 0;
    } else if (shouldLoopPrev) {
      this.centerIndex = this.imgList.length - 1;
    }

    this.dragging = false;
    this.dragOffsetX = 0;
    this.atEdgeDrag = false;
  }

  next() {
    this.centerIndex = (this.centerIndex + 1) % this.imgList.length;
  }

  prev() {
    this.centerIndex = (this.centerIndex - 1 + this.imgList.length) % this.imgList.length;
  }
}
