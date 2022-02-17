import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroDto } from '../models/hero-dto.model';

@Injectable()
export class HeroService {

  constructor(
    private httpClient: HttpClient
  ) { }


  public get(){
    return this.httpClient.get<HeroDto[]>('http://localhost:3000/heroes')
  }
}
