import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.scss'],
})
export class MyModal1Component implements OnInit {

  projetoItems: any[] = [];

  constructor(private modalCtrl: ModalController, private http: HttpClient) { }

  ngOnInit() {
    this.ionViewDidEnter1();
  }

  closeModal1() {
    this.modalCtrl.dismiss();
  }

  ionViewDidEnter1() {
    console.log('ionViewDidEnter called');
    this.http.get('http://localhost:4242/api/projeto').subscribe(res => {
      this.projetoItems = (res as any).Projetos;
    }, error => {
      console.error(error);
    });
  }

}
