import { Injectable } from '@angular/core';
import { AdHeroJobComponent } from 'src/app/shared/components/ads/ad-hero-job/ad-hero-job.component';
import { AdHeroProfileComponent } from 'src/app/shared/components/ads/ad-hero-profile/ad-hero-profile.component';
import { AdItem } from '../models/ad-item.model';

@Injectable({
  providedIn: 'root'
})
export class AdService {
  getAds() {
    return [
      new AdItem(AdHeroJobComponent, { title: 'Titolo 1', bio: 'Bio 1' }),
      new AdItem(AdHeroProfileComponent, { name: 'Name 1', bio: 'Bio 1' }),
      new AdItem(AdHeroJobComponent, { title: 'Titolo 2', bio: 'Bio 2' }),
      new AdItem(AdHeroProfileComponent, { name: 'Name 2', bio: 'Bio 2' })
    ]
  }

}
