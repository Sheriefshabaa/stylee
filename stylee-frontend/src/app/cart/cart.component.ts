import {Component, NgIterable} from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: false,

  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems?: any = [];

  removeItem(item: any) {

  }

  updateQuantity(item: any, number: number) {

  }

  getTotalAmount() {
    return 0;
  }

  checkout() {

  }
}
