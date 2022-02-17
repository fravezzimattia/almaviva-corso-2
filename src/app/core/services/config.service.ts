import { Injectable } from '@angular/core';
import { ThemeEnum } from '../enums/theme.enum';

@Injectable()
export class ConfigService {
  public theme: ThemeEnum = ThemeEnum.Dark;

  public setTheme(value: ThemeEnum) {
    this.theme = value;
  }
}
