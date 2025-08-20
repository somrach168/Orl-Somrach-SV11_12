import { Component } from '@angular/core';
import { CartServiceService } from '../service/cart-service.service';
import { CurrencyPipe } from '@angular/common';
import { RouterLink,} from '@angular/router';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { ɵEmptyOutletComponent } from "../../../node_modules/@angular/router/router_module.d-Bx9ArA6K";

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, RouterLink,   ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart_item: any[] = [];
  constructor(
  public CartServiceService: CartServiceService,
  private router: Router
) {}



  goToCheckout() {
  if (this.CartServiceService.hasSelectedItems()) {
    this.router.navigate(['/checkout']);
  }

}

}
