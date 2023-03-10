import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  value: string = '';
  products: Product[] = [];
  productsSearch: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
      this.productsSearch = products;
    });
  }

  _filter = (value: string): void => {
    const filterValue = value.toLowerCase();

    if (value !== '') {
      this.productsSearch = this.products.filter(
        (product) =>
          product.name.toLowerCase().includes(filterValue) ||
          product.description!.toLowerCase().includes(filterValue) ||
          product.manufacturer.toLowerCase().includes(filterValue) ||
          product.model!.toLowerCase().includes(filterValue) ||
          product.product_code.toLowerCase().includes(filterValue)
      );
    } else {
      this.productsSearch = this.products;
    }
  };

  optionSelected = (event: MatAutocompleteSelectedEvent) => {
    const product: Product = event.option.value;
    this.value = product.name + ' - ' + product.product_code;
  };
}
