import { ProductService } from './../service/product.service';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { CartServiceService } from '../service/cart-service.service';
import { SlideComponent } from "../slide/slide.component";


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ProductComponent, SlideComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent  {
  constructor(public CartServiceService: CartServiceService, public ProductService: ProductService ){

  }


  addToCart(product: any) {
    this.CartServiceService.addToCart(product)
  }
}
