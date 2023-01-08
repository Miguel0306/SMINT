import { Component, Renderer2, ViewChild } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { IonToggle, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})

export class TabsPage {
  
  iconName: string;
  @ViewChild('toggle')
  toggle!: IonToggle;


  constructor(
  private translateService : TranslateService,
  private toastController : ToastController, private renderer: Renderer2) {this.iconName = 'sunny';
  }
  async changeLanguage(language : string) {
  await Preferences.set({ key: 'user-lang', value: language });
  await this.showToast();
  window.location.reload();
  }
  async showToast() {
  const toast = await this.toastController.create({
  message: this.translateService.instant("Idioma alterado com sucesso"),
  duration: 4000,
  });
  await toast.present();
  }

  onToggleColorTheme(event: any) {
    console.log(event.detail.checked);
    if(event.detail.checked){
      this.renderer.setAttribute(document.body, 'color-theme', 'dark');
      localStorage.setItem('color-theme', 'dark');
      this.iconName = 'moon';
    }else {
      this.renderer.setAttribute(document.body, 'color-theme', 'light');
      localStorage.setItem('color-theme', 'light');
      this.iconName = 'sunny';
    }
  }

  ionViewWillEnter() {
    const colorTheme = localStorage.getItem('color-theme');
    if (colorTheme === 'dark') {
    this.toggle.checked = true;
    } else {
    this.toggle.checked = false;
    }
    }

  }