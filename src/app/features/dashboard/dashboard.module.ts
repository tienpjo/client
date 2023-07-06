import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './all-products/all-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [AllProductsComponent, AddProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'index',
        component: AllProductsComponent,
      },
    ]),
  ],
})
export class DashboardModule {}
