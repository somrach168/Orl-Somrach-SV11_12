import { Injectable } from '@angular/core';
declare const Swal: any;

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  constructor() {
    let cart = localStorage.getItem('cart_item') ?? '[]';
    this.cart_item = JSON.parse(cart);
  }
  private cart_item: any[] = [];

  addToCart(product: any) {
        let plu_index = this.cart_item.findIndex((x) => x.id == product.id);
     if (plu_index > -1) {
      this.cart_item[plu_index].qty ++ ;
    } else {
       product.qty = 1;
       product.is_select = true
      this.cart_item.push(product);
    }

    localStorage.setItem('cart_item', JSON.stringify(this.cart_item));
  }



  incremenQty(item: any) {
    let index = this.cart_item.findIndex((x) => x.id == item.id);
    this.cart_item[index].qty++;
    localStorage.setItem('cart_item', JSON.stringify(this.cart_item));
  }

  decremenQty(item: any) {
    if (item.qty > 1) {
      let index = this.cart_item.findIndex((x) => x.id == item.id);
      this.cart_item[index].qty--;
      localStorage.setItem('cart_item', JSON.stringify(this.cart_item));
    }
  }

  removeCartItem(item: any) {

     Swal.fire({
      title: 'Are you sure?',
      text: "Remove The Product!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result: any) => {
      if (result.isConfirmed) {
         let index = this.cart_item.findIndex((x) => x.id == item.id);
        this.cart_item.splice(index, 1);
        localStorage.setItem('cart_item', JSON.stringify(this.cart_item));
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
      }
    });

  }
  removeallCartItem(item: any) {
    //  let index =  this.cart_item.findIndex(x => x.id == item.id);



    Swal.fire({
      title: 'Are you sure?',
      text: "Remove The Product!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.cart_item = [];
       localStorage.setItem('cart_item', JSON.stringify(this.cart_item));
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
      }
    });


  }

    getCartTotal(){
      let total = 0;
      this.cart_item  .forEach(x => {
        if(x.is_select){
          total += x.price * x.qty
        }

      });
      return total;
    }

      SelectCartItem(item: any) {
    let index = this.cart_item.findIndex((x) => x.id == item.id);
    this.cart_item[index].is_select = !this.cart_item[index].is_select;
    localStorage.setItem('cart_item', JSON.stringify(this.cart_item));
  }
clearCart() {
  this.cart_item = [];
  localStorage.removeItem('cart_item');
}


  getCartItem() {
    return this.cart_item;
  }


}
