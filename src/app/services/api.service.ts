import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Category, GetProducts } from '../shared/models';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.apiUrl;
  requestOpts = {};
  randomNumber = 0;
  constructor(private readonly http: HttpClient) {
    this.setHeader();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getProduct(req?: any): Observable<GetProducts> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { lang, page, sort, category, maxPrice } = req;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const addCategory = category ? { category } : {};
    const categoryQuery = category ? '&category=' + category : '';
    const priceQuery = maxPrice ? '&maxPrice=' + maxPrice : '';
    this.requestOpts = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });

    const apiProducts =
      this.apiUrl + '/api/products?' + '&page=' + page + '&sort=' + sort + categoryQuery + priceQuery;

    return this.http.get<GetProducts>(apiProducts, this.requestOpts).pipe(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      map((data: any) => ({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  getCart() {
    const headers = new HttpHeaders();
    this.requestOpts = { headers, withCredentials: true };
    const cartUrl = this.apiUrl + '/api/cart';
    console.log(cartUrl);
    return this.http.get(cartUrl, this.requestOpts);
  }

  addToCart(params: string) {
    const headers = new HttpHeaders();
    this.requestOpts = { headers, withCredentials: true };
    this.randomNumber = this.randomNumber + 1;
    const randomNum = '&randomId=' + this.randomNumber; // add random to link
    const addCartUrl = this.apiUrl + '/api/cart/add/?id=' + params + randomNum;
    //  console.log(addCartUrl);
    return this.http.get(addCartUrl, this.requestOpts);
  }

  getCategories(): Observable<Category[]> {
    const categoryUrl = this.apiUrl + '/api/products/category';
    return this.http.get<Category[]>(categoryUrl, this.requestOpts);
  }

  setHeader() {
    const headers = new HttpHeaders();
    this.requestOpts = { headers, withCredentials: true };
  }
}
