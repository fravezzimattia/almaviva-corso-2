import { Component, Input } from '@angular/core';
import { AdsComponent } from '../interfaces/ads.component';

@Component({
  selector: 'app-ad-hero-job',
  templateUrl: './ad-hero-job.component.html',
  styleUrls: ['./ad-hero-job.component.scss']
})
export class AdHeroJobComponent implements AdsComponent {
  @Input()
  public data: any;
}
