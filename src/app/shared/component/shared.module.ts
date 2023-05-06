import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductContentComponent } from './product-content/product-content.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    ProductContentComponent,
    ProductListComponent,
    MenuBarComponent,
    SideBarComponent,
  ],
  imports: [CommonModule, NgbModule, FontAwesomeModule],
  providers: [],
  exports: [
    ProductContentComponent,
    ProductListComponent,
    MenuBarComponent,
    SideBarComponent,
  ],
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faBars);
  }
}
