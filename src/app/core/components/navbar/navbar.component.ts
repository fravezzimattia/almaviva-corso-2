import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppRoutings } from '../../configs/app-routings';
import { ThemeEnum } from '../../enums/theme.enum';
import { ConfigService } from '../../services/config.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { getProfile } from '../profile/store/profile.actions';
import { ProfileState } from '../profile/store/profile.reducers';

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
    private localStorageService: LocalStorageService,
    private readonly store: Store<ProfileState>
  ) { }

  ngOnInit(): void {
  }

  public login(role: string) {

    this.store.dispatch(getProfile({ id: 1 }));
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
