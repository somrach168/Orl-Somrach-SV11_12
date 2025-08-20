import { Component,EventEmitter,Input,Output,output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ToKHRPipe } from '../custom-pipes/to-khr.pipe';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-product',
  imports: [CurrencyPipe, ToKHRPipe, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product: any;
  @Output() onAddToCart: any = new EventEmitter <any>();


  addToCart(product: any){
    this.onAddToCart.emit(product);

  }
}
