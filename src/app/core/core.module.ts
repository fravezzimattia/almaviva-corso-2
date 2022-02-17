import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ConfigService } from './services/config.service';
import { ThemeEnum } from './enums/theme.enum';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
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
