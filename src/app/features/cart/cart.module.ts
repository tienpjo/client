import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart-content/cart.component';
import { CartShowComponent } from './cart-show/cart-show.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [CartShowComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'checkout',
        component: CartComponent,
      },
    ]),
    NgbModule,
    FontAwesomeModule,
  ],
  exports: [CartShowComponent],
})
export class CartModule {}
