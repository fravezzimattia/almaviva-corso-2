import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { exportComponents } from './export.component.module';
import { exportDirectives } from './export.directives.module';
import { material } from './material.module';
import { AdHeroJobComponent } from '../shared/components/ads/ad-hero-job/ad-hero-job.component';
import { AdHeroProfileComponent } from '../shared/components/ads/ad-hero-profile/ad-hero-profile.component';
import { AdHostDirective } from '../shared/directives/ad-host.directive';
import { IsHeroFilterPipe } from '../shared/pipes/is-hero-filter.pipe';

@NgModule({
  declarations: [
    ...exportComponents,
    ...exportDirectives,
    AdHeroJobComponent,
    AdHeroProfileComponent,
    AdHostDirective,
    IsHeroFilterPipe
  ],
  imports: [
    CommonModule,
    ...material
  ],
  exports: [
    ...exportComponents,
    ...exportDirectives,
    ...material,
    IsHeroFilterPipe
  ]
})
export class SharedModule { }
