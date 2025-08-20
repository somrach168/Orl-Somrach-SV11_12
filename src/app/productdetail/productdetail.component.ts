import { routes } from './../app.routes';
import { Component,EventEmitter,Input,Output,output,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ToKHRPipe } from '../custom-pipes/to-khr.pipe';
import { CartServiceService } from '../service/cart-service.service';
import { ProductService } from '../service/product.service';
declare const axios : any;
declare const $ : any;

@Component({
  selector: 'app-productdetail',
  imports: [CurrencyPipe,ToKHRPipe,],
  templateUrl: './productdetail.component.html',
  styleUrl: './productdetail.component.css'
})
export class ProductdetailComponent implements OnInit {

  qty = 1;
  loading = true;

      constructor(private route: ActivatedRoute,private CartServiceService:CartServiceService,
        private ProductService:ProductService,


      ){

      }
  private cart_item: any[] = [];
      product: any = {};

      ngOnInit(): void{
          const product_id = this.route.snapshot.queryParamMap.get('product_id');
          let ng_this = this;
    $.LoadingOverlay('show', {
      image: '',
      text: 'Loading...',
    });

    axios
      .get(`https://fakestoreapi.com/products/${product_id}`)
      .then(function (response: any) {
        ng_this.product = response.data;
        $.LoadingOverlay('hide', {
          image: '',
          text: 'Loading...',
        });
      })
      .catch(function (error: any) {
        console.log(error);
      });
      }

 addToCart(product: any) {
    this.CartServiceService.addToCart(this.product)
  }

  getCartItem() {
    return this.cart_item;
  }

 increaseQty() {
  this.qty++;
}

decreaseQty() {
  if (this.qty > 1) {
    this.qty--;
  }
}

}
