import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { CategoriaDTO } from 'src/models/categoria-dto';
import { ProdutoDTO } from 'src/models/produto-dto';
import { ProdutoService } from 'src/service/domain/produto.service';

@Component({
  selector: 'app-pratodia',
  templateUrl: './pratodia.page.html',
  styleUrls: ['./pratodia.page.scss'],
})
export class PratodiaPage implements OnInit {
  categorias: CategoriaDTO[] = [];
 

  items : ProdutoDTO[] = [];
  page : number = 0;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public produtoService: ProdutoService,
    private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    let categoria_id = this.activateRoute.snapshot.paramMap.get('data');
    this.produtoService.findByCategoria(categoria_id)
    .subscribe(response => {
      this.items = response['content'];
    },
    error => {});
  }

}
