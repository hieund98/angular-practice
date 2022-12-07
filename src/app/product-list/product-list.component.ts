import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import {Order, Product, products} from '../products';
import { Observable } from 'rxjs';
import { ProductService } from '../product.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;
  addForm = this.formBuilder.group({
    name: '',
    price: 0,
    description: '',
  });

  shippingCosts!: Observable<any[]>;
  listProducts!: Observable<Product[]>;

  async ngOnInit(): Promise<void> {
    this.shippingCosts = await this.cartService.getShipPrices();
    this.listProducts = await this.productService.getProducts();
  }

  constructor(private cartService: CartService,private productService: ProductService,private formBuilder: FormBuilder) {}

  async delete(product: Product) {
    let res = await this.productService.removeProductById(product.id);
    window.alert("Remove product successfully!")
    this.listProducts = await this.productService.getProducts();
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  async addProduct(prod: Product) {
      await this.productService.addToList(prod).then(async () => {
      this.listProducts = await this.productService.getProducts();
      window.alert('Product has been added!');
      this.addForm.reset();
    });
  }
  onSubmit(): void {
    // Process checkout data here
    let product = <Product>{
      name: this.addForm.value.name,
      description: this.addForm.value.description,
      price: this.addForm.value.price,
    };
    this.addProduct(product).then(r => console.log("done adding product"));
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
