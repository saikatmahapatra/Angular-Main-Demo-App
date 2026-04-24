import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiKitRoutingModule } from './ui-kit-routing.module';
import { UiKitComponent } from './ui-kit.component';
import { APP_UI_KIT } from '.';


@NgModule({
  declarations: [
    UiKitComponent
  ],
  imports: [
    CommonModule,
    UiKitRoutingModule,
    ...APP_UI_KIT
  ]
})
export class UiKitModule { }
