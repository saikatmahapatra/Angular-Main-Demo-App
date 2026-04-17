import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebPageLayoutComponent } from './web-page-layout.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FeaturesComponent } from './components/features/features.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { PolicyComponent } from './components/policy/policy.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { HighlightComponent } from './components/highlight/highlight.component';

const routes: Routes = [
  {
    path: '', component: WebPageLayoutComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: LandingPageComponent },
      { path: 'features', component: FeaturesComponent },
      { path: 'privacy', component: PrivacyComponent },
      { path: 'policy', component: PolicyComponent },
      { path: 'pricing', component: PricingComponent },
      { path: 'highlights', component: HighlightComponent },
      { path: '**', redirectTo: 'home' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebPageRoutingModule { }
