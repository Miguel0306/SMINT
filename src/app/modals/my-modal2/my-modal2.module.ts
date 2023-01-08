import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { MyModal2Component } from './my-modal2.component';

@NgModule({
  declarations: [
    MyModal2Component
  ],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule
  ],
  exports: [
    MyModal2Component
  ]
})
export class MyModal2Module { }
