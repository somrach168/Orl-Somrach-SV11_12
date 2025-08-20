import { Component } from '@angular/core';
import { CartServiceService } from '../service/cart-service.service';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
// declare const Swal: any;

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  cart_item: any[] = [];

   selectedItems: any = [];

  constructor(
     public CartServiceService: CartServiceService,
    private router: Router
  ) {
    this.selectedItems = this.CartServiceService.getCartItem()
      .filter(x => x.is_select);
  }

completePurchase() {
  alert('ការទិញបានបញ្ចប់ដោយជោគជ័យ🎉🎉');
  this.CartServiceService.clearSelectedItems();
}


}
