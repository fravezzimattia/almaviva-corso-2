import { Component, Input, OnDestroy } from '@angular/core';
import { AdsComponent } from '../interfaces/ads.component';

@Component({
  selector: 'app-ad-hero-job',
  templateUrl: './ad-hero-job.component.html',
  styleUrls: ['./ad-hero-job.component.scss']
})
export class AdHeroJobComponent implements AdsComponent, OnDestroy {
  @Input()
  public data: any;

  ngOnDestroy(): void {
    console.log("viene distrutto!");
  }
}
