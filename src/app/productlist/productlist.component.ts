import { Component } from '@angular/core';
import { ProductService } from './../service/product.service';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { CartServiceService } from '../service/cart-service.service';
import { SlideComponent } from "../slide/slide.component";

@Component({
  selector: 'app-productlist',
   standalone: true,
  imports: [ProductComponent,],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
    constructor(public CartServiceService: CartServiceService, public ProductService: ProductService ){

  }


  addToCart(product: any) {
    this.CartServiceService.addToCart(product)
  }
}
