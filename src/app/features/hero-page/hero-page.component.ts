import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.scss']
})
export class HeroPageComponent {
  public heroList = ['Mattia', 'Luca', 'Andrea'];

  public heroName = '';

  public saveHero() {
    this.heroList.push(this.heroName);

    // this.heroList = [...this.heroList, this.heroName];
    this.heroName = '';
  }
}
