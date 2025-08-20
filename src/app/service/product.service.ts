import { Injectable } from '@angular/core';
declare const axios: any;
declare const $: any;

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {
    let ng_this = this;
    $.LoadingOverlay('show', {
      image: '',
      text: 'Loading...',
    });

    axios
      .get('https://fakestoreapi.com/products')
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

  private product: any[] = [];

  getProduct() {
    return this.product;
  }
}
