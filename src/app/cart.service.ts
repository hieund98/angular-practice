import { Product } from './products';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from "rxjs";
import { ApiService} from "./api.service";

/* . . . */
@Injectable({
  providedIn: 'root',
})
export class CartService {
  path= 'api/shipfees';
  items: Product[] = [];
  constructor(private http: HttpClient, private  apiService: ApiService) {}
  /* . . . */
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
  /* . . . */
  async getShipPrices() {
    const options = {
      params: {},
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('jwt-token'),
      }
    };

    return this.apiService.get(this.path, options, map((response: any) => {
          return response.data;
        })
    );
  }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
