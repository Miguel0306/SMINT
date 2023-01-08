import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { MyModal1Component } from './my-modal.component';

@NgModule({
  declarations: [
    MyModal1Component
  ],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule
  ],
  exports: [
    MyModal1Component
  ]
})
export class MyModal1Module { }
