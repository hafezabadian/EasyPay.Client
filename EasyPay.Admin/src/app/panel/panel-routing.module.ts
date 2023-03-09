import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PanelComponent } from './panel.component';


const routes: Routes = [
  {
   path: '',
   component: PanelComponent,
   children:[
      {path:'dashboard', component: DashboardComponent}
   ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
