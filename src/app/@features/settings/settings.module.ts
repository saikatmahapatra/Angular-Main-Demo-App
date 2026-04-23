import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsLayoutComponent } from './settings-layout.component';
import { SiteSettingsComponent } from './components/site-settings/site-settings.component';
import { SiteMetaComponent } from './components/site-meta/site-meta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../@shared/shared.module';
import { SrbacComponent } from './components/srbac/srbac.component';
import { APP_UI_COMPONENTS } from 'src/app/@app-ui-lib';


@NgModule({
  declarations: [
    SettingsLayoutComponent,
    SiteSettingsComponent,
    SiteMetaComponent,
    SrbacComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SettingsRoutingModule,
    ...APP_UI_COMPONENTS,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SettingsModule { }
