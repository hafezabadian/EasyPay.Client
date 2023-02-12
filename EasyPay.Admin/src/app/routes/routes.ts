import { Routes, RouterModule } from '@angular/router';

export const adminRoutes : Routes = [
  {
  path:'',redirectTo:'/auth/login',pathMatch:'full'
   },
   {
    path:'panel', redirectTo:'/panel',pathMatch:'full'
   },
   {
    path:'login' , redirectTo:'/auth/login' , pathMatch:'full'
   },
   {
    path:'auth/login' , redirectTo:'/auth/login' , pathMatch:'full'
   },
   {
    path:'register' , redirectTo:'/auth/register' , pathMatch:'full'
   },
   {
    path:'auth/register' , redirectTo:'/auth/register' , pathMatch:'full'
   }
];
