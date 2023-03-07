import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { NgMaterialModule } from '../ng-material/ng-material.module';

import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { ProductComponent } from './pages/product/product.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { CardProductComponent } from './components/card-product/card-product.component';



@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    ProductComponent,
    HomeComponent,
    ListComponent,
    CardProductComponent
  ],
  imports: [
    CommonModule, ProductsRoutingModule, NgMaterialModule
  ]
})
export class ProductsModule { }
