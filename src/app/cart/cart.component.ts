import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // Define the items property to store the products in the cart
  // This sets the items using the CartService getItems method that was defined
  // when you created cart.service.ts
  items = this.cartService.getItems();

  // to gather the user's name and address, use the FormBuilder group() method to set the checkoutForm property to a form model containing name and address fields
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    // Inject the CartService so the CartComponent can use it
  private cartService: CartService,
  // Inject the FormBuilder service in the constructor. This service is part of the ReactiveFormsModule
  private formBuilder: FormBuilder,
    ) { }

    onSubmit(): void {
      // process checkout data here
      this.items = this.cartService.clearCart();
      console.warn('Your order has been submitted', this.checkoutForm.value);
      this.checkoutForm.reset();
    }

  ngOnInit(): void {
  }

}
