import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdHeroJobComponent } from './ad-hero-job.component';

describe('AdHeroJobComponent', () => {
  let component: AdHeroJobComponent;
  let fixture: ComponentFixture<AdHeroJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdHeroJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdHeroJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
