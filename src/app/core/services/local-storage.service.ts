import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public setItem(value: any) {
    localStorage.setItem('user', JSON.stringify(value));
  }

  public getItem() {
    const item = localStorage.getItem('user');
    return !!item
      ? JSON.parse(item)
      : null;
  }

  public removeItem() {
    localStorage.removeItem('user');
  }
}
