import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UrlService {
url = 'http://localhost/projetos/petshop/php/';

  constructor( public alert: AlertController) { }

  getUrl() {
   return this.url;
  }

  async alertas(titulo, msg) {
   const alert = await this.alert.create ({
     header: titulo,
     message: msg,
     buttons: [
       'OK'
     ]
   });
   await alert.present();
  }
}
