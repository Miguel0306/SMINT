import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-modal2',
  templateUrl: './my-modal2.component.html',
  styleUrls: ['./my-modal2.component.scss'],
})
export class MyModal2Component implements OnInit {

  educacaoItems: any[] = [];
  projetoItems: any[] = [];
  firstTwoItems: any[] = []; 
  lastTwoItems: any[] = [];

  constructor(private modalCtrl: ModalController, private http: HttpClient) { }

  ngOnInit() {
    this.ionViewDidEnter2();
  }

  closeModal2() {
    this.modalCtrl.dismiss();
  }
  
  ionViewDidEnter2() {
    this.http.get('http://localhost:4242/api/educacao').subscribe(res => {
      this.educacaoItems = (res as any).Educacao;
      let firstTwoItems = this.educacaoItems.filter((item, index) => index < 2);
      this.firstTwoItems = firstTwoItems; // assign the value to the new property
      let lastTwoItems = this.educacaoItems.slice(2);
      this.lastTwoItems = lastTwoItems; // assign the value to the new property
    }, error => {
      console.error(error);

    });
  }

}
