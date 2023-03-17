
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileResolver } from '../resolver/userprofile.resolver';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { DocumentComponent } from './components/admin/userinfo/Document/Document.component';
import { ProfileComponent } from './components/admin/userinfo/profile/profile.component';
import { PanelComponent } from './panel.component';


const routes: Routes = [
  {
    path: '',
    component: PanelComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'userinfo/profile', component: ProfileComponent, resolve: { userdata: UserProfileResolver } },
      { path: 'userinfo/document', component: DocumentComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
