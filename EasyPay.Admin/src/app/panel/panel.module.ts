import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { PanelRoutingModule } from './panel-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { SideComponent } from './components/side/side.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    PanelRoutingModule,
  ],
  declarations: [
    PanelComponent,
    NavComponent,
    SideComponent,
    DashboardComponent
  ]
})
export class PanelModule { }
