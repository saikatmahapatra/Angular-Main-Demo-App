import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { DashboardLandingPageComponent } from './components/dashboard-landing-page/dashboard-landing-page.component';
const routes: Routes = [
  {
    path: '', component: DashboardLayoutComponent, children: [
      { path: '', component: DashboardLandingPageComponent },
      { path: 'post-details/:id', component: PostDetailsComponent },
      { path: 'analytics/:entity/:entityId', component: AnalyticsComponent },
      { path: 'my-analytics/:entity/:entityId', component: AnalyticsComponent }]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class DashboardRoutingModule { }
