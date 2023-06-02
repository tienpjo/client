import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductContentComponent } from './products/product-content/product-content.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCoffee, faBars, faCartShopping, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
@NgModule({
  declarations: [ProductContentComponent, ProductListComponent, MenuBarComponent, SideBarComponent],
  imports: [CommonModule, NgbModule, FontAwesomeModule, RouterModule],
  providers: [],
  exports: [ProductContentComponent, ProductListComponent, MenuBarComponent, SideBarComponent],
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faBars, faCartShopping, faShoppingCart);
  }
}
