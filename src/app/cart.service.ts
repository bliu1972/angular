import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Product } from './products';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = []
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  addToCart(product : Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    // return this.http.get<{type: string, price: number}[]> (this.apiUrl + '/assets/shipping.json');
    return this.http.get<{type: string, price: number}[]> (this.apiUrl);
  }
}
