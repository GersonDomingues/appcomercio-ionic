import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { CategoriaDTO } from '../../models/categoria-dto';
import { CategoriaService } from '../../service/domain/categoria.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  items: CategoriaDTO[];

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    public categoriaService: CategoriaService,
    private router: Router) {}

  ngOnInit() {
    this.categoriaService.findAll()
    .subscribe(response => {
      this.items = response;
      

    },
    error => {
      console.log(error);
    });

  }

  
  showProdutos(categoria_id : string) {
    let data = JSON.stringify(categoria_id);
    
    switch (data) {
      case '1':
        this.router.navigate(['pratodia', {data}]);
        break;
      case '2':
        this.router.navigate(['pratoentrada', {data}]);
      break;
      case '3':
        this.router.navigate(['pratorefeicao', {data}]);
      break;
      case '4':
        this.router.navigate(['sobremesa', {data}]);
      break;
      case '5':
        this.router.navigate(['lanche', {data}]);
      break;
      case '6':
        this.router.navigate(['bebida', {data}]);
      break;
      default:
    }   
  } 
  }
