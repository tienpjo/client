import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/shared/models';

@Component({
  selector: 'app-product-content',
  templateUrl: './product-content.component.html',
  styleUrls: ['./product-content.component.css'],
})
export class ProductContentComponent {
  @Input() product: Product;
  @Input() cartIds: { [productId: string]: number };
  @Output() addProduct = new EventEmitter<string>();
  @Output() removeProduct = new EventEmitter<string>();
  constructor() {}

  onAddProduct(id: string): void {
    this.addProduct.emit(id);
  }

  onRemoveProduct(id: string): void {
    this.removeProduct.emit(id);
  }
}
