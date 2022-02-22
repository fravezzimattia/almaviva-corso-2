import { Component, OnInit } from '@angular/core';
import { AppRoutings } from '../../configs/app-routings';
import { ThemeEnum } from '../../enums/theme.enum';
import { ConfigService } from '../../services/config.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public appRoutings = AppRoutings;
  public themeEnum = ThemeEnum;

  constructor(
    public configService: ConfigService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
  }

  public login(role: string) {
    let user = {
      name: 'Mattia',
      role: role,
      token: 'example-token'
    }
    this.localStorageService.setItem(user);
  }

  public logout() {
    this.localStorageService.removeItem();
  }

}
