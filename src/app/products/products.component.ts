import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  
    prix !:number;
    productList = this.productS.listProdcut;


    constructor(private r:Router, private productS:ProductService){}

    Buy(P:Product){
      //if(P.quatity>0){
        P.quantity--;
      //}

    }
    Like(P:Product){
      P.like++;
    }
    ShowDetails(id:number){

      this.r.navigate(["products/productsDetails",id]);
    }

}
