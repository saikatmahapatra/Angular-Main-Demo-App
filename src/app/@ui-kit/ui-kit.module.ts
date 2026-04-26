import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiKitRoutingModule } from './ui-kit-routing.module';
import { UiKitComponent } from './ui-kit.component';
import { APP_UI_KIT } from '.';
import { SharedModule } from "@shared/shared.module";


@NgModule({
  declarations: [
    UiKitComponent
  ],
  imports: [
    CommonModule,
    UiKitRoutingModule,
    ...APP_UI_KIT,
    SharedModule,
]
})
export class UiKitModule { }
