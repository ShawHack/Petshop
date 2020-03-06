import { Component, OnInit } from '@angular/core';
import { Validator, FormBuilder, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { Http, Headers, Response, ResponseOptions} from '@angular/http';
import { map } from 'rxjs/operators';
import { UrlService } from '../../provider/url.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.page.html',
  styleUrls: ['./cadastro-produto.page.scss'],
})
export class CadastroProdutoPage implements OnInit {
postagem: any;
nome: any;
valor: any;
qtd: any;
descricao: any;


  constructor(
   public navCtrl: NavController,
   public formBuilder: FormBuilder,
   // tslint:disable-next-line: deprecation
   public http: Http,
   public urlService: UrlService

  ) {
    this.postagem = this.formBuilder.group({
      nome: ['', Validators.required],
      valor: ['', Validators.required],
      qtd: ['', Validators.required],
      descricao: ['', Validators.required]
      });
   }
   postarProduto() {
    if (this.nome === undefined || this.valor === undefined || this.qtd === undefined || this.descricao === undefined) {
      this.urlService.alertas('Atenção', 'Preencha todos os Campos');
    } else {

      this.postData(this.postagem.value)
      .subscribe(
        data => {
          console.log('Inserido com sucesso');
           },
        err => {
          console.log('erro ao tentar inserir');
         
        }
      );

    }
  }

   postData(valor) {
    
   // tslint:disable-next-line: deprecation
   let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
   return this.http.post(this.urlService.url+"insertProduto.php", valor, {
     headers: headers,
     method: "POST",
   }).pipe(map(
     (res: Response) => { return res.json(); }
   ));
  
        
      }
  ngOnInit() {
  }

}
