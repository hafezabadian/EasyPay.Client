import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { PanelRoutingModule } from './panel-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { SideComponent } from './components/side/side.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/admin/userinfo/profile/profile.component';
import { DocumentComponent } from './components/admin/userinfo/Document/Document.component';
import { UserService } from './Service/user.service';
import { UserProfileResolver } from '../resolver/userprofile.resolver';
import { JalaliPipe } from '../pipes/jalali.pipe';


@NgModule({
  imports: [
    CommonModule,
    PanelRoutingModule,
    FormsModule
  ],
  declarations: [
    JalaliPipe,
    PanelComponent,
    NavComponent,
    SideComponent,
    DashboardComponent,
    ProfileComponent,
    DocumentComponent,
    FooterComponent
  ],
  providers: [
    UserService,
    UserProfileResolver
  ],
})
export class PanelModule { }
