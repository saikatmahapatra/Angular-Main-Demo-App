import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebPageRoutingModule } from './web-page-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FeaturesComponent } from './components/features/features.component';
import { HighlightComponent } from './components/highlight/highlight.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { PolicyComponent } from './components/policy/policy.component';
import { WebPageLayoutComponent } from './web-page-layout.component';
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrimeNgModule } from '../prime-ng.module';
import { SharedModule } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    FeaturesComponent,
    HighlightComponent,
    PricingComponent,
    PrivacyComponent,
    PolicyComponent,
    WebPageLayoutComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    WebPageRoutingModule,
    PrimeNgModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class WebPageModule { }
