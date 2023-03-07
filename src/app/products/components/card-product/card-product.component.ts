import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styles: [
    `
      .texto {
        color: #457eac;
        font-weight: 500;
        font-size: 22px;
      }
      .bt {
        color: #f06449;
        font-size: 16px;
      }
    `,
  ],
})
export class CardProductComponent {
  @Input() product!: Product;
}
