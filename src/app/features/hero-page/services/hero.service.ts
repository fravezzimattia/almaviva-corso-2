import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { AppConfig } from 'src/app/core/configs/app-configs';
import { HeroDto } from '../models/hero-dto.model';
import { HeroStore } from './hero.store';

@Injectable()
export class HeroService {

  constructor(
    private httpClient: HttpClient,
    private heroStore: HeroStore,
    private appConfig: AppConfig
  ) { }


  public get() {
    this.httpClient.get<HeroDto[]>(`${this.appConfig.baseUrl}${this.appConfig.endpoints.heroes.baseUrl}`)
      .pipe(take(1))
      .subscribe(res => this.heroStore.init(res))
  }
}
