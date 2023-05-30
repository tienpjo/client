import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './component/footer/footer.component';
import { MainComponent } from './component/main/main.component';
import { SharedModule } from './shared/component/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ApiService } from './services/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductReducer } from './store/reducers';
import { metaReducers } from './store/reducers/product.reducer';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, MainComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    SharedModule,
    FontAwesomeModule,
    StoreModule.forRoot(ProductReducer.productReducer, { metaReducers }),
    EffectsModule.forRoot([]),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
