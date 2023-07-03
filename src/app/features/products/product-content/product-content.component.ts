import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/shared/models';

@Component({
  selector: 'app-product-content',
  templateUrl: './product-content.component.html',
  styleUrls: ['./product-content.component.css'],
})
export class ProductContentComponent implements OnInit {
  itemsImg: any;
  urlImg: string;
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

  onClickImg(url: string) {
    console.log(url);
    this.urlImg = url;
  }
  ngOnInit(): void {}
}
