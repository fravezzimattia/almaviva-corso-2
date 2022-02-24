import { Component, Input } from '@angular/core';
import { AdsComponent } from '../interfaces/ads.component';

@Component({
  selector: 'app-ad-hero-profile',
  templateUrl: './ad-hero-profile.component.html',
  styleUrls: ['./ad-hero-profile.component.scss']
})
export class AdHeroProfileComponent implements AdsComponent {
  @Input()
  public data: any;
}
