import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { exportComponents } from './export.component.module';
import { exportDirectives } from './export.directives.module';
import { material } from './material.module';

@NgModule({
  declarations: [
    ...exportComponents,
    ...exportDirectives,
  ],
  imports: [
    CommonModule,
    ...material
  ],
  exports: [
    ...exportComponents,
    ...exportDirectives,
    ...material
  ]
})
export class SharedModule { }
