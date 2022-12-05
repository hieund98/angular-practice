import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product, products } from '../products';
import { Observable } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  shippingCosts!: Observable<{ type: string; price: number }[]>;
  listProducts!: Observable<Product[]>;

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
    this.listProducts = this.productService.getListProduct();
  }
  constructor(private cartService: CartService,private productService: ProductService) {}
  share() {
    window.alert('The product has been shared!');
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
