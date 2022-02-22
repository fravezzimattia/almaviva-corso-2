import { Component, OnInit } from '@angular/core';
import { HeroDto } from './models/hero-dto.model';
import { HeroService } from './services/hero.service';
import { HeroStore } from './services/hero.store';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.scss']
})
export class HeroPageComponent implements OnInit {
  // public heroList: HeroDto[] = [];
  public heroName = '';

  constructor(
    public heroService: HeroService,
    public heroStore: HeroStore
  ) { }

  ngOnInit(): void {
    // Chiamata Servizi Step 1
    // this.heroService.get()
    //   .subscribe(res => this.heroList = res);

    // Chiamata Servizio per scaricare i dati
    this.heroService.get();
  }

  public saveHero() {
    // this.heroList.push(this.heroName);

    // this.heroList = [...this.heroList, this.heroName];
    this.heroName = '';
  }
}
