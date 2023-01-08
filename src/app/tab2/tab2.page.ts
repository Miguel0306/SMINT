import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MyModal1Component } from '../modals/my-modal/my-modal.component';
import { MyModal2Component } from '../modals/my-modal2/my-modal2.component';
import { MyModal3Component } from '../modals/my-modal3/my-modal3.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private modalCtrl: ModalController) {}

  async openModal1() {
    const modal = await this.modalCtrl.create({
      component: MyModal1Component
    });
    return await modal.present();
  }

  async openModal2() {
    const modal = await this.modalCtrl.create({
      component: MyModal2Component
    });
    return await modal.present();
  }

  async openModal3() {
    const modal = await this.modalCtrl.create({
      component: MyModal3Component
    });
    return await modal.present();
  }

}
