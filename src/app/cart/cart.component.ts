import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { OrderService } from '../order.service';
import { FormBuilder } from '@angular/forms';
import { Order } from '../products';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.cartService.getItems();
  list = this.orderService.getList();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private formBuilder: FormBuilder
  ) {}
  addToOrderList(order: Order) {
    this.orderService.addToList(order);
    window.alert('Your order has been added!');
  }
  onSubmit(): void {
    // Process checkout data here
    let order = <Order>{
      name: this.checkoutForm.value.name,
      address: this.checkoutForm.value.address,
      list: this.items,
    };
    this.addToOrderList(order);

    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value.name);
    this.checkoutForm.reset();
  }
}
