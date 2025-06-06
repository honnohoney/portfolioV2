import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyPage } from './hobby-page';

describe('HobbyPage', () => {
  let component: HobbyPage;
  let fixture: ComponentFixture<HobbyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HobbyPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HobbyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
