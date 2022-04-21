import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { CategoriaDTO } from '../../models/categoria-dto';
import { CategoriaService } from '../../service/domain/categoria.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  categorias: CategoriaDTO[];

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    public categoriaService: CategoriaService) {}

  ngOnInit() {
    this.categoriaService.findAll()
    .subscribe(response => {
      this.categorias = response;
      

    },
    error => {
      console.log(error);
    });

  }

  showProdutos(){
    this.navCtrl.navigateForward('pratodia');
  }
}
