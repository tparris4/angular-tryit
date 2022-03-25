import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  // methods for other class implementing the cart service can use
  addToCart(product: Product){
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  clearCart(){
    this.items = [];
    return this.items;
  }

  // method to get prices from shipping.json
  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>
    ('/assets/shipping.json');
  }

  // injecting httpclient
  constructor(
    private http: HttpClient
  ) { }
}
