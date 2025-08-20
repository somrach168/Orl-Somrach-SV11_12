import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AboutComponent } from './about/about.component';
import { ProductlistComponent } from './productlist/productlist.component';
export const routes: Routes = [
  {
    path:'contact',
    component: ContactComponent,
  },
  {
    path:'',
    component: HomepageComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path:'productdetail',
    component: ProductdetailComponent,
  },
  {
    path:'checkout',
    component: CheckoutComponent,
  },
   {
    path:'about',
    component: AboutComponent,
  },
   {
    path:'productlist',
    component: ProductlistComponent,
  },


];
