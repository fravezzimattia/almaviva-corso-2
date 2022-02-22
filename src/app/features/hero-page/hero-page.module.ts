import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroPageRoutingModule } from './hero-page-routing.module';
import { HeroItemComponent, HeroListComponent, HeroPageComponent } from '.';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeroService } from './services/hero.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeroStore } from './services/hero.store';
import { JwtInterceptor } from 'src/app/core/interceptors/jwt.interceptor';
import { ErrorInterceptor } from 'src/app/core/interceptors/error.interceptor';

@NgModule({
  declarations: [
    HeroPageComponent,
    HeroListComponent,
    HeroItemComponent,
  ],
  imports: [
    CommonModule,
    HeroPageRoutingModule,
    SharedModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HeroStore,
    HeroService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ]
})
export class HeroPageModule { }
