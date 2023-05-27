import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-shop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'client';
  product: any;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService
      .getProduct({ category: ['light'] })
      .subscribe({ next: value => console.log(value) });
    //console.log(this.product);
  }
}
