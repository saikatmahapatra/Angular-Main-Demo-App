import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './@core/guards/auth.guard';
import { AuthLayoutComponent } from './@shared/components/layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './@shared/components/layouts/main-layout/main-layout.component';
import { ErrorPageNotFoundComponent } from './@components/error-page-not-found/error-page-not-found.component';
import { ErrorUnauthorizedComponent } from './@components/error-unauthorized/error-unauthorized.component';
import { ErrorPageComponent } from './@components/error-page/error-page.component';
import { FaqComponent } from './@components/faq/faq.component';
import { DefaultLayoutComponent } from '@shared/components/layouts/default-layout/default-layout.component';

// Routing with lazy loading
const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'demo',
        loadChildren: () => import('./@features/app-demo/app-demo.module').then(m => m.AppDemoModule)
      },
      {
        path: 'uikit',
        loadComponent: () => import('./@ui-kit/@ui-kit-demo/ui-kit-demo.component').then(m => m.UiKitDemoComponent)
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./@features/auth/auth.module').then(m => m.AuthModule)
      },
    ]
  },
  {
    path: 'user/login',
    pathMatch: 'full',
    redirectTo: 'auth/login'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./@features/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'emp',
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./@features/user/user.module').then(m => m.UserModule)
      },
      {
        path: 'cms',
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./@features/cms/cms.module').then(m => m.CmsModule)
      },
      {
        path: 'timesheet',
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./@features/timesheet/timesheet.module').then(m => m.TimesheetModule)
      },
      {
        path: 'project',
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./@features/project/project.module').then(m => m.ProjectModule)
      },
      {
        path: 'leave',
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./@features/leave/leave.module').then(m => m.LeaveModule)
      },
      // {
      //   path: 'asset-management',
      //   canActivateChild: [AuthGuard],
      //   loadChildren: () => import('./asset-management/asset-management.module').then(m => m.AssetManagementModule)
      // },
      {
        path: 'settings',
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./@features/settings/settings.module').then(m => m.SettingsModule)
      }

    ]
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'error',
    component: ErrorPageComponent
  },
  {
    path: 'unauthorized',
    component: ErrorUnauthorizedComponent
  },
  {
    path: 'website',
    loadChildren: () => import('./@features/website/website.module').then(m => m.WebsiteModule)
  },
  {
    path: '**', // wildcard will be at always last
    component: ErrorPageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
