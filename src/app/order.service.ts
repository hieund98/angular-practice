import { Order } from './products';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* . . . */
@Injectable({
  providedIn: 'root',
})
export class OrderService {
  items: Order[] = [];
  constructor(private http: HttpClient) {}

  addToList(order: Order) {
    this.items.push(order);
  }

  getList() {
    return this.items;
  }

  clearList() {
    this.items = [];
    return this.items;
  }
}
