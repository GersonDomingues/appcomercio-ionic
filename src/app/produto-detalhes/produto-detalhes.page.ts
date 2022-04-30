import { Component, OnInit } from '@angular/core';
import { ProdutoDTO } from 'src/models/produto-dto';
import { NavController, NavParams } from '@ionic/angular';
import { ProdutoService } from 'src/service/domain/produto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.page.html',
  styleUrls: ['./produto-detalhes.page.scss'],
})
export class ProdutoDetalhesPage implements OnInit{
  item: ProdutoDTO;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public produtoService: ProdutoService,
    private activateRoute: ActivatedRoute
    ) {
  }



  ngOnInit() {
    let produto_id  = this.activateRoute.snapshot.paramMap.get('prod');
    this.produtoService.findById(produto_id)
    .subscribe(response => {
      this.item = response;
     
    },
    error => {});
  }

}

