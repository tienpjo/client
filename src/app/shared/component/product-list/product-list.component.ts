import { Component, Input, OnInit, Output } from '@angular/core';
import { GetProducts, Product } from '../../models';
import { ApiService } from 'src/app/services/api.service';
import { ProductContentComponent } from '../product-content/product-content.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService
      .getProduct({ category: ['light'] })
      .subscribe({ next: value => (this.products = value.products) });
  }
}
