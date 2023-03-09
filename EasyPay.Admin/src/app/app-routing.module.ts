import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:'auth', redirectTo:'/auth/login', pathMatch:'full'},

  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},

  {path: 'panel',
  // can activate temp disable for dev reason
  //canActivate: [AuthGuard],
  loadChildren: () => import('./panel/panel.module').then(m => m.PanelModule)
  },

  //{path:'**', redirectTo:'/auth/login', pathMatch:'full'}
  {path:'**', redirectTo:'/panel/dashboard', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes ,
    {preloadingStrategy: PreloadAllModules}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
