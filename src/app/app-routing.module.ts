import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthModule} from './auth/auth.module';
import {AuthGuardGuard} from './guard/auth-guard.guard';
const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'dashboard',
    canActivate:[AuthGuardGuard],
    loadChildren:() => import('./components/articles/articles.module').then(m => m.ArticlesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
