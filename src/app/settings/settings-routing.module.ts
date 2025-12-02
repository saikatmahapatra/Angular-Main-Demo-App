import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsLayoutComponent } from './settings-layout.component';
import { SiteSettingsComponent } from './components/site-settings/site-settings.component';
import { SiteMetaComponent } from './components/site-meta/site-meta.component';
import { SrbacComponent } from './components/srbac/srbac.component';

const routes: Routes = [
  {
    path: '', component: SettingsLayoutComponent,
    children: [
      { path: '', component: SiteSettingsComponent },
      { path: 'site-meta', component: SiteMetaComponent },
      { path: 'srbac', component: SrbacComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
