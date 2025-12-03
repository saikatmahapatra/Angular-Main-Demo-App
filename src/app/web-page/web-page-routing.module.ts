import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebPageLayoutComponent } from './web-page-layout.component';
import { HomeComponent } from './components/home/home.component';
import { FeaturesComponent } from './components/features/features.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { PolicyComponent } from './components/policy/policy.component';
import { PricingComponent } from './components/pricing/pricing.component';

const routes: Routes = [
  {
    path: '', component: WebPageLayoutComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'features', component: FeaturesComponent },
      { path: 'privacy', component: PrivacyComponent },
      { path: 'policy', component: PolicyComponent },
      { path: 'pricing', component: PricingComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebPageRoutingModule { }
