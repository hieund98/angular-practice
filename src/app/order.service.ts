import { Product } from './products';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* . . . */
@Injectable({
  providedIn: 'root',
})
export class OrderService {
  items: Product[] = [];
  constructor(private http: HttpClient) {}
  /* . . . */
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }

  addToList(product: Product) {
    this.items.push(product);
  }

  getList() {
    return this.items;
  }

  clearList() {
    this.items = [];
    return this.items;
  }
}
