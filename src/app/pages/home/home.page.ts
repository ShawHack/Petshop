
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {map} from 'rxjs/operators';
import {Http } from '@angular/http';
import {UrlService} from '../../provider/url.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class homePage implements OnInit {
  public home: string;
   produtos: any;  
  
  constructor(private activatedRoute: 
    ActivatedRoute, 
    public http: Http,
    public serviceUrl: UrlService,
    public nav: NavController,
    private route: Router
    ) { 
      this.listProdutos();
    }


  listProdutos() {
  this.http.get(this.serviceUrl.getUrl()+"listDados.php").pipe(map(res => res.json()))
    .subscribe (
     listDados => {
     this.produtos = listDados;
    });
  }
 
   toProdutos(){
     this.nav.navigateForward('/cadastro-produto');
   }   


  ngOnInit() {
    this.home = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
