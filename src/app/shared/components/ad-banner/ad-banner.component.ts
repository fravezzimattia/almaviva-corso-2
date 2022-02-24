import { Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AdItem } from 'src/app/core/models/ad-item.model';
import { AdHostDirective } from '../../directives/ad-host.directive';
import { AdsComponent } from '../ads/interfaces/ads.component';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.scss']
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input()
  public ads: AdItem[] = [];

  @ViewChild(AdHostDirective, { static: true })
  public appAdHost!: AdHostDirective;

  private currentIndex: number = -1;
  private interval: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    this.loadComponent();
    this.loadComponentByInterval()
  }

  private loadComponentByInterval() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000)
  }

  private loadComponent() {
    this.currentIndex = (this.currentIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    const viewContainerRef = this.appAdHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AdsComponent>(componentFactory);
    componentRef.instance.data = adItem.data;
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
