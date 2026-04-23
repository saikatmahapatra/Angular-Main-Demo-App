import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveRoutingModule } from './leave-routing.module';
import { LeaveLayoutComponent } from './leave-layout.component';
import { ApplyLeaveComponent } from './components/apply-leave/apply-leave.component';
import { ManageLeaveComponent } from './components/manage-leave/manage-leave.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeaveDetailsActionsComponent } from './components/leave-details-actions/leave-details-actions.component';
import { SharedModule } from '../../@shared/shared.module';
import { LeaveBalanceCalculationComponent } from './components/leave-balance-calculation/leave-balance-calculation.component';
import { APP_UI_COMPONENTS } from 'src/app/@app-ui-lib';


@NgModule({
  declarations: [
    LeaveLayoutComponent,
    ApplyLeaveComponent,
    ManageLeaveComponent,
    LeaveDetailsActionsComponent,
    LeaveBalanceCalculationComponent    
  ],
  imports: [
    CommonModule,
    LeaveRoutingModule,
    SharedModule,
    ...APP_UI_COMPONENTS,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LeaveModule { }
