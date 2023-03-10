import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { PanelRoutingModule } from './panel-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { SideComponent } from './components/side/side.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/userinfo/profile/profile.component';
import { DocumentsComponent } from './components/userinfo/documents/documents.component';

@NgModule({
  imports: [
    CommonModule,
    PanelRoutingModule,
  ],
  declarations: [
    PanelComponent,
    NavComponent,
    SideComponent,
    DashboardComponent,
    ProfileComponent,
    DocumentsComponent,
    FooterComponent
  ]
})
export class PanelModule { }
