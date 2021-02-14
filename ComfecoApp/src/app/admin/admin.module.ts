import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { TeamsComponent } from './teams/teams.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [AdminComponent, TeamsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DragDropModule

  ]
})
export class AdminModule { }
