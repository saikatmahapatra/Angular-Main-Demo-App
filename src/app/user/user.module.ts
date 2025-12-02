import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../@shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { UserLayoutComponent } from './user-layout.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { AuthInterceptor } from '../@core/interceptors/auth.interceptor';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { UploadPhotoComponent } from './components/upload-photo/upload-photo.component';
import { UploadDocComponent } from './components/upload-doc/upload-doc.component';
import { AddEditAddressComponent } from './components/add-edit-address/add-edit-address.component';
import { AddEditEducationComponent } from './components/add-edit-education/add-edit-education.component';
import { AddEditExperienceComponent } from './components/add-edit-experience/add-edit-experience.component';
import { AddEditEmergencyContactComponent } from './components/add-edit-emergency-contact/add-edit-emergency-contact.component';
import { AddEditBasicInfoComponent } from './components/add-edit-basic-info/add-edit-basic-info.component';
import { AddEditPayrollInfoComponent } from './components/add-edit-payroll-info/add-edit-payroll-info.component';
import { EditApproversComponent } from './components/edit-approvers/edit-approvers.component';
import { PeopleILeadComponent } from './components/people-i-lead/people-i-lead.component';
import { ViewEmployeesComponent } from './components/view-employees/view-employees.component';
import { PrimeNgModule } from '../prime-ng.module';
import { ViewMyProfileComponent } from './components/view-my-profile/view-my-profile.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    UserRoutingModule,
    PrimeNgModule
  ],
  declarations: [
    ManageUsersComponent,
    UserLayoutComponent,
    AddUserComponent,
    ViewProfileComponent,
    ViewMyProfileComponent,
    ChangePasswordComponent,
    UploadPhotoComponent,
    UploadDocComponent,
    AddEditAddressComponent,
    AddEditEducationComponent,
    AddEditExperienceComponent,
    AddEditEmergencyContactComponent,
    AddEditBasicInfoComponent,
    AddEditPayrollInfoComponent,
    EditApproversComponent,
    PeopleILeadComponent,
    ViewEmployeesComponent,
    EditUserComponent
  ]
})
export class UserModule { }
