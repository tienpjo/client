import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GetProducts, Product } from '../shared/models';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.apiUrl;
  requestOpts = {};
  constructor(private readonly http: HttpClient) {}

  getProduct(req: any): Observable<GetProducts> {
    const { lang, page, sort, category, maxPrice } = req;

    const addCategory = category ? { category } : {};
    const categoryQuery = category ? '&category=' + category : '';
    const priceQuery = maxPrice ? '&maxPrice=' + maxPrice : '';
    this.requestOpts = new HttpHeaders({ 'Content-Type': 'application/json' });

    const apiProducts =
      this.apiUrl + '/api/products?' + '&page=' + page + '&sort=' + sort + categoryQuery + priceQuery;
    console.log(apiProducts);

    return this.http.get<GetProducts>(apiProducts, this.requestOpts).pipe(
      map((data: any) => ({
        products: data.all.map((product: any) => ({
          ...product,
          category: product.category,
        })),
        pagination: data.pagination,
        maxPrice: data.maxPrice,
        minPrice: data.minPrice,
      }))
    );
  }
}
