import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, filter, map } from 'rxjs';
import { CartComponent } from 'src/app/features/cart/cart-content/cart.component';
import { Cart } from 'src/app/shared/models';
import { ProductSelector } from 'src/app/store/selectors/index.selectors';
import { State } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../../../styles.css'],
})
export class HeaderComponent implements OnInit {
  cart$: Observable<Cart>;
  @ViewChild('appcart') appCart: CartComponent;
  constructor(private router: Router, private renderer: Renderer2, private store: Store<State>) {}
  cartClick(): void {
    const cartEl = this.appCart.cartBody.nativeElement;
    this.renderer.addClass(cartEl, 'cart-open');
    const cartOverlay = this.appCart.cartOverlay.nativeElement;
    this.renderer.addClass(cartOverlay, 'overlay-visible');
  }
  ngOnInit(): void {
    this.cart$ = this.store.select(ProductSelector.GetCart);
  }
}
