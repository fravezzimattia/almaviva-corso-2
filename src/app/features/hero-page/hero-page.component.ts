import { Component, OnInit } from '@angular/core';
import { HeroDto } from './models/hero-dto.model';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.scss']
})
export class HeroPageComponent implements OnInit {
  public heroList: HeroDto[] = [];
  public heroName = '';

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.heroService.get()
      .subscribe(res => this.heroList = res);
  }

  public saveHero() {
    // this.heroList.push(this.heroName);

    // this.heroList = [...this.heroList, this.heroName];
    this.heroName = '';
  }
}
