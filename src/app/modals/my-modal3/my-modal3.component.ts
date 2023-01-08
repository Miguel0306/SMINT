import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-modal3',
  templateUrl: './my-modal3.component.html',
  styleUrls: ['./my-modal3.component.scss'],
})
export class MyModal3Component implements OnInit {

  certificacoesItems: any[] = [];
  firstSevenItems: any[] = [];
  restOfItems: any[] = [];


  constructor(private modalCtrl: ModalController, private http: HttpClient) { }

  ngOnInit() {
    this.ionViewDidEnter3();
  }

  closeModal3() {
    this.modalCtrl.dismiss();
  }

  ionViewDidEnter3() {
    console.log('ionViewDidEnter called');
    this.http.get('http://localhost:4242/api/certificacoes').subscribe(res => {
      this.certificacoesItems = (res as any).Certificacoes;
      let firstSevenItems = this.certificacoesItems.slice(0, 7);
      this.firstSevenItems = firstSevenItems;
      let restOfItems = this.certificacoesItems.slice(7);
      this.restOfItems = restOfItems;
    }, error => {
      console.error(error);

    });
  }

}
