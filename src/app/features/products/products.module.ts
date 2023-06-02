import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProductEffects } from 'src/app/store/effects/product.effects';
import { keyProductState, productReducer } from 'src/app/store/reducers/product.reducer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, //added here too
    ReactiveFormsModule,
    StoreModule.forFeature(keyProductState, productReducer),
    EffectsModule.forFeature([ProductEffects]),
  ],
})
export class ProductModule {}
