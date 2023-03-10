import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getProducts = (): Observable<Product[]> => {
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  };

  getProduct = (id: string): Observable<Product> => {
    return this.http.get<Product>(`${this.baseUrl}/products/${id}`);
  };
}
