import { Component, EventEmitter, Output, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CartComponent } from 'src/app/features/cart/cart-content/cart.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../../../styles.css'],
})
export class HeaderComponent {
  //@Output() cartCheckout = new EventEmitter<any>(); //TODO: fix any
  @ViewChild('appcart') appCart: CartComponent;
  constructor(private router: Router, private renderer: Renderer2) {}
  cartClick(): void {
    let cartEl = this.appCart.cartBody.nativeElement;
    this.renderer.addClass(cartEl, 'cart-open');
    let cartOverlay = this.appCart.cartOverlay.nativeElement;
    this.renderer.addClass(cartOverlay, 'overlay-visible');
  }
}
