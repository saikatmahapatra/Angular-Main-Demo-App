import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebPageRoutingModule } from './web-page-routing.module';
import { HeaderWidgetComponent } from './components/header-widget/header-widget.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FeaturesComponent } from './components/features/features.component';
import { HighlightComponent } from './components/highlight/highlight.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { PolicyComponent } from './components/policy/policy.component';
import { WebPageLayoutComponent } from './web-page-layout.component';
import { HeroComponent } from './components/hero/hero.component';
import { FooterWidgetComponent } from './components/footer-widget/footer-widget.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from "@shared/shared.module";
import { APP_UI_KIT } from 'src/app/@ui-kit';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    HeaderWidgetComponent,
    FooterWidgetComponent,
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
    ...APP_UI_KIT,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
]
})
export class WebPageModule { }
