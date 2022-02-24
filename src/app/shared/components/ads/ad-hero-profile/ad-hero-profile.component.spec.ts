import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdHeroProfileComponent } from './ad-hero-profile.component';

describe('AdHeroProfileComponent', () => {
  let component: AdHeroProfileComponent;
  let fixture: ComponentFixture<AdHeroProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdHeroProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdHeroProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
