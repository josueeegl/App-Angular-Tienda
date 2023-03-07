import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts = (): Observable<Product[]> => {
    return this.http.get<Product[]>(
      'https://tiendalaspalmas-server.onrender.com/products'
    );
  };
}
