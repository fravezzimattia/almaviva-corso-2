import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { HeroDto } from '../models/hero-dto.model';
import { HeroStore } from './hero.store';

@Injectable()
export class HeroService {

  constructor(
    private httpClient: HttpClient,
    private heroStore: HeroStore
  ) { }


  public get() {
    this.httpClient.get<HeroDto[]>('http://localhost:3000/heroes')
      .pipe(take(1))
      .subscribe(res => this.heroStore.init(res))
  }
}
