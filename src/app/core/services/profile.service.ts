import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { AppConfig } from '../configs/app-configs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient,
    private appConfig: AppConfig
  ) { }

  public getProfile(id: number): Observable<any> {
    return this.http
      .get<any>(`http://localhost:3000/profiles/${id}`)
      .pipe(take(1))
  }
}
