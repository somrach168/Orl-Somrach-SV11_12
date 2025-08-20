import { Component } from '@angular/core';
import { CartServiceService } from '../service/cart-service.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  cart_item: any[] = [];

  constructor(public CartServiceService: CartServiceService) {
    this.cart_item = this.CartServiceService.getCartItem();
  }

  completePurchase() {
    if (this.cart_item.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Simulate purchase success
    alert("✅ Purchase completed successfully!");

    // Clear cart after purchase (handled in service)
    this.CartServiceService.clearCart();
    this.cart_item = [];
  }
}
