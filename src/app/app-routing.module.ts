import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutings } from './core/configs/app-routings';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';

const routes: Routes = [{
  path: AppRoutings.heroPage,
  loadChildren: () => import('./features/hero-page/hero-page.module').then(res => res.HeroPageModule)
},
{
  path: AppRoutings.adminPage,
  loadChildren: () => import('./features/admin-page/admin-page.module').then(res => res.AdminPageModule),
  canActivate: [AuthGuard, RoleGuard],
  canLoad: [AuthGuard, RoleGuard],
  data: {
    role: 'admin'
  }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
