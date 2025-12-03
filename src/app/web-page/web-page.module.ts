import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebPageRoutingModule } from './web-page-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FeaturesComponent } from './components/features/features.component';
import { HighlightComponent } from './components/highlight/highlight.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { PolicyComponent } from './components/policy/policy.component';
import { WebPageLayoutComponent } from './web-page-layout.component';


@NgModule({
  declarations: [
    HomeComponent,
    FeaturesComponent,
    HighlightComponent,
    PricingComponent,
    PrivacyComponent,
    PolicyComponent,
    WebPageLayoutComponent
  ],
  imports: [
    CommonModule,
    WebPageRoutingModule
  ]
})
export class WebPageModule { }
