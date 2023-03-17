
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileResolver } from '../resolver/userprofile.resolver';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DocumentsComponent } from './components/userinfo/documents/documents.component';
import { ProfileComponent } from './components/userinfo/profile/profile.component';
import { PanelComponent } from './panel.component';


const routes: Routes = [
  {
    path: '',
    component: PanelComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'userinfo/profile', component: ProfileComponent, resolve: { userdata: UserProfileResolver } },
      { path: 'userinfo/documents', component: DocumentsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
