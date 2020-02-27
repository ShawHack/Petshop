import { UrlService } from './../../provider/url.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import {Http} from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    email: string;
    senha: string;


  constructor(public  alert: AlertController ,
              public urlService: UrlService ,
    // tslint:disable-next-line: deprecation
              public http: Http ,
              public navController: NavController,
              public loading: LoadingController  ) {
               // this.email = 'saulovlima36@gmail.com';
               // this.senha =  'marginal36';
               }

  ngOnInit() {
  }

  async logar() {
    if (this.email === undefined  || this.senha === undefined) {
     this.urlService.alertas('Atenção' , 'Preencha todos os campos');
    } else {
      const load = await this.loading.create({
        spinner: 'circles',
        message: 'Authenticando...'
      });
      await load.present();
      this.http.get(this.urlService.getUrl() + 'login.php?email=' + this.email +
      '&senha=' + this.senha).pipe(map(
       res => res.json()))
       .subscribe(
       data => {
          // tslint:disable-next-line:no-conditional-assignment
                 if (data.msg.logado === 'sim') {
                   if (data.dados.status === 'ativo') {
                     load.dismiss();
                     this.navController.navigateBack('home');
                   } else {
                     load.dismiss();
                     this.urlService.alertas('Atenção ' , 'Usuário bloqueado');
                   }
               } else {
                load.dismiss();
                this.urlService.alertas('Atenção' , 'Usuário ou senha inválido!');
          }
       }
       );
    }
  }

}
