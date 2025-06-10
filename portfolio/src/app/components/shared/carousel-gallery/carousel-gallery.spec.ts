import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselGallery } from './carousel-gallery';

describe('CarouselGallery', () => {
  let component: CarouselGallery;
  let fixture: ComponentFixture<CarouselGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselGallery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselGallery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
