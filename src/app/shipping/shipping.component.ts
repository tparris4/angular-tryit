import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

// renders the shipping data
@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

// define a shippingcosts property that sets the shippingCosts property using the 
// getShippingPrices() method from the CartService
shippingCosts = this.cartService.getShippingPrices();

  // inject the cart service in the shippingcomponent constructor
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
