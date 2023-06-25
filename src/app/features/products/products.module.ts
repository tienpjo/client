import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProductEffects } from 'src/app/store/effects/product.effects';
import { keyProductState, productReducer } from 'src/app/store/reducers/product.reducer';
import { ProductContentComponent } from './product-content/product-content.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartModule } from '../cart/cart.module';

@NgModule({
  declarations: [ProductListComponent, ProductContentComponent],
  imports: [
    CommonModule,
    FormsModule, //added here too
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule,
    CartModule,
    StoreModule.forFeature(keyProductState, productReducer),
    EffectsModule.forFeature([ProductEffects]),
  ],
  providers: [],
  exports: [ProductContentComponent, ProductListComponent],
})
export class ProductModule {}
