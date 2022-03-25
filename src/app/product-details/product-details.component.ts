import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) {}

    // Takes the current product as an argument
    addToCart(product: Product){
      // uses the CartService addToCart() method to add the product to the cart
      this.cartService.addToCart(product);
      window.alert('Your product has been added to the cart!');
    }

  ngOnInit(): void {
    // get the product id from the current route
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // find the product that corresponds with the id provided in route
    this.product = products.find(product => product.id === productIdFromRoute);
  }
}
