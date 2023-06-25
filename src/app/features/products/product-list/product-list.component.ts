import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../../../shared/models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];
  @Input() cartIds: { [productId: string]: number };
  @Output() addProduct = new EventEmitter<string>();
  @Output() removeProduct = new EventEmitter<string>();

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    console.log(this.cartIds);
  }
  onAddProduct(id: string): void {
    this.addProduct.emit(id);
  }

  onRemoveProduct(id: string): void {
    this.removeProduct.emit(id);
  }
}
