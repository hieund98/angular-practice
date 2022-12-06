import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Product, products } from '../products';
import { ProductService } from '../product.service';
import {async, map, Observable, Subscription} from "rxjs";
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;
  listProducts!: Observable<Product[]>;
  editForm = this.formBuilder.group({
    name: '',
    price: 0,
    description: '',
  });

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private productService: ProductService) {}
  handleResponse(res: Response){
    return res.json;
  }
  async ngOnInit() : Promise<void> {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    let url = 'http://localhost:8080/api/products/' + productIdFromRoute
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const rawResponse = await fetch(url, options);
    this.product =  await rawResponse.json();
  }
  async onSubmit(): Promise<void> {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    // Process checkout data here
    let bodyRaw = {
      name: this.editForm.value.name,
      description: this.editForm.value.description,
      price: this.editForm.value.price,
    };
    let url = 'http://localhost:8080/api/products/' + productIdFromRoute;
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyRaw)
    }

    const rawResponse = await fetch(url, options).then(async () => {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const newResponse = await fetch(url, options);
      this.product = await newResponse.json();

      window.alert("Product Updated!");
    });
  }
}
