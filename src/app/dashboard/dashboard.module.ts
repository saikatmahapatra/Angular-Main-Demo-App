import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { DashboardStatComponent } from './components/dashboard-stat/dashboard-stat.component';
import { EventCalendarComponent } from './components/event-calendar/event-calendar.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../@shared/shared.module';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PrimeNgModule } from '../prime-ng.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLangModule } from '../translate-language.module';
import { DashboardLandingPageComponent } from './components/dashboard-landing-page/dashboard-landing-page.component';

@NgModule({
  declarations: [
    DashboardLayoutComponent,
    DashboardLandingPageComponent,
    DashboardStatComponent,
    EventCalendarComponent,
    PostDetailsComponent,
    AnalyticsComponent
  ],
  imports: [
    CommonModule,
    TranslateLangModule,
    SharedModule,
    RouterModule,
    DashboardRoutingModule,
    PrimeNgModule,
    FullCalendarModule ,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    AnalyticsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
