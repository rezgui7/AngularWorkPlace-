import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../Models/product';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {

P: Product = {id: 1, title: "t", price: 0, quantity: 0, like: 0};

  addForm(F : NgForm){
    console.log(F);
  }
}
