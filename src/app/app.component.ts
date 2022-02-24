import { Component, OnInit } from '@angular/core';
import { AdItem } from './core/models/ad-item.model';
import { AdService } from './core/services/ad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public condition = true;
  public ads: AdItem[] = [];
  
  constructor(
    private adService: AdService
  ) { }

  ngOnInit(): void {
    this.ads = this.adService.getAds();
  }
}
