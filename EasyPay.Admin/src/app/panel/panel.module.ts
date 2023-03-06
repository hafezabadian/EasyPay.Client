import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { PanelRoutingModule } from './panel-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PanelRoutingModule,
  ],
  declarations: [PanelComponent]
})
export class PanelModule { }
