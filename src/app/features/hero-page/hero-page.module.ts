import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroPageRoutingModule } from './hero-page-routing.module';
import { HeroItemComponent, HeroListComponent, HeroPageComponent } from '.';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

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
    FormsModule
  ]
})
export class HeroPageModule { }