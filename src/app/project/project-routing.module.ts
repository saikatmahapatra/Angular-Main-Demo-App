import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddEditProjectComponent } from './components/add-edit-project/add-edit-project.component';
import { AddEditTaskComponent } from './components/add-edit-task/add-edit-task.component';
import { ManageProjectComponent } from './components/manage-project/manage-project.component';
import { ManageTaskComponent } from './components/manage-task/manage-task.component';
import { ProjectLayoutComponent } from './project-layout.component';
import { AdminGuard } from '../@core/guards/admin.guard';

const routes: Routes = [
  {
    path: '', canActivate: [AdminGuard], component: ProjectLayoutComponent, children: [
      { path: 'manage-project', component: ManageProjectComponent },
      { path: 'add-project', component: AddEditProjectComponent },
      { path: 'edit-project/:id', component: AddEditProjectComponent },
      { path: 'add-task', component: AddEditTaskComponent },
      { path: 'edit-task/:id', component: AddEditTaskComponent },
      { path: 'manage-tasks', component: ManageTaskComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
