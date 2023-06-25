import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  @ViewChild('cartbody') cartBody: ElementRef<HTMLDivElement>;
  @ViewChild('cartoverlay') cartOverlay: ElementRef<HTMLDivElement>;
  @ViewChild('cartClose') cartClose: ElementRef<HTMLButtonElement>;
  constructor(private renderer: Renderer2, private elRef: ElementRef) {}
  closeCart() {
    let cartEl = this.cartBody.nativeElement;
    this.renderer.removeClass(cartEl, 'cart-open');
    let overlayEl = this.cartOverlay.nativeElement;
    this.renderer.removeClass(overlayEl, 'overlay-visible');
  }
}
