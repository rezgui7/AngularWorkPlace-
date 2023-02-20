import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { AddProductsComponent } from './add-products/add-products.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path:"",redirectTo:"products",pathMatch:"full"
  },
  {
    path:"products",component:ProductsComponent,children:[
      {
      path:"productsDetails/:id",component:ProductsDetailsComponent
      }
    ]
  },
  {
    path:"contact",component:ContactComponent
  },
  {
    path:"addProduct", component:AddProductsComponent
  },
  {
    path:"**",component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
