import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CmsRoutingModule } from './cms-routing.module';
import { CmsLayoutComponent } from './cms-layout.component';
import { ManageCmsComponent } from './components/manage-cms/manage-cms.component';
import { AddContentComponent } from './components/add-content/add-content.component';
import { ViewHolidaysComponent } from './components/view-holidays/view-holidays.component';
import { ViewHrPoliciesComponent } from './components/view-hr-policies/view-hr-policies.component';
import { ManageHolidaysComponent } from './components/manage-holidays/manage-holidays.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { APP_UI_KIT } from 'src/app/@ui-kit';

@NgModule({
  imports: [
    CommonModule,
    CmsRoutingModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ...APP_UI_KIT,
    EditorModule
  ],
  declarations: [
    CmsLayoutComponent,
    ManageCmsComponent,
    AddContentComponent,
    ViewHolidaysComponent,
    ViewHrPoliciesComponent,
    ManageHolidaysComponent
  ]
})
export class CmsModule { }
