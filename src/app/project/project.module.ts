import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProjectRoutingModule } from './project-routing.module';
import { AddEditProjectComponent } from './components/add-edit-project/add-edit-project.component';
import { AddEditTaskComponent } from './components/add-edit-task/add-edit-task.component';
import { ProjectLayoutComponent } from './project-layout.component';
import { SharedModule } from '../@shared/shared.module';
import { ManageProjectComponent } from './components/manage-project/manage-project.component';
import { ManageTaskComponent } from './components/manage-task/manage-task.component';
import { PrimeNgModule } from '../prime-ng.module';


@NgModule({
  declarations: [
    AddEditProjectComponent,
    AddEditTaskComponent,
    ProjectLayoutComponent,
    ManageProjectComponent,
    ManageTaskComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PrimeNgModule
  ]
})
export class ProjectModule { }
