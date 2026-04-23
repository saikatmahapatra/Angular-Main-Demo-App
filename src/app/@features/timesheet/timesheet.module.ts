import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimesheetRoutingModule } from './timesheet-routing.module';
import { TimesheetLayoutComponent } from './timesheet-layout.component';
import { TimesheetFormComponent } from './components/timesheet-form/timesheet-form.component';
import { ViewTimesheetComponent } from './components/view-timesheet/view-timesheet.component';
import { SharedModule } from '../../@shared/shared.module';
import { EditTimesheetComponent } from './components/edit-timesheet/edit-timesheet.component';
import { TimesheetReportComponent } from './components/timesheet-report/timesheet-report.component';
import { APP_UI_COMPONENTS } from 'src/app/@app-ui-lib';
@NgModule({
  declarations: [
    TimesheetLayoutComponent,
    TimesheetFormComponent,
    ViewTimesheetComponent,
    EditTimesheetComponent,
    TimesheetReportComponent
  ],
  imports: [
    CommonModule,
    TimesheetRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ...APP_UI_COMPONENTS
  ]
})
export class TimesheetModule { }
