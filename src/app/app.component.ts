import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { CartServiceService } from './service/cart-service.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, RouterLink, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(public CartServiceService :CartServiceService ){

  }

}
