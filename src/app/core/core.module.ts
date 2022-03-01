import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ConfigService } from './services/config.service';
import { ThemeEnum } from './enums/theme.enum';
import { AppConfigGetter, AppConfigInitializer, AppConfigLoader } from './loaders/app-config.loader';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/store.config';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './components/profile/store/profile.effects';


@NgModule({
  declarations: [
    NavbarComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,

    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ProfileEffects])
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule {
  public static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [
        // Config Load in APP
        // AppConfigLoader,
        // AppConfigInitializer,
        // AppConfigGetter,
        ConfigService
      ]
    }
  }

  public static forChild() {
    return {
      ngModule: CoreModule
    }
  }

  public static forTest() {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: ConfigService, useValue: { theme: ThemeEnum.Dark } }
      ]

    }
  }

  // constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
  //   if (parentModule) {
  //     throw new Error('CoreModule is already loaded!');
  //   }
  // }
}
