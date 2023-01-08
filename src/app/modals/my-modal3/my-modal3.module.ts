import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { MyModal3Component } from './my-modal3.component';

@NgModule({
  declarations: [
    MyModal3Component
  ],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule
  ],
  exports: [
    MyModal3Component
  ]
})
export class MyModal3Module { }