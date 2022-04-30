import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoDTO } from 'src/models/produto-dto';
import { NavController, NavParams } from '@ionic/angular';
import { ProdutoService } from 'src/service/domain/produto.service';

@Component({
  selector: 'app-bebida',
  templateUrl: './bebida.page.html',
  styleUrls: ['./bebida.page.scss'],
})
export class BebidaPage implements OnInit {
  
  items : ProdutoDTO[] = [];
  page : number = 0;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public produtoService: ProdutoService,
    private activateRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    let categoria_id = this.activateRoute.snapshot.paramMap.get('data');
    this.produtoService.findByCategoria(categoria_id)
    .subscribe(response => {
      this.items = response['content'];

      
    },
    error => {});
  }

  

    showDetail(produto_id : string) {
      let prod = JSON.stringify(produto_id);
      this.router.navigate(['produto-detalhes', {prod}]);
      }

  
    
  }
