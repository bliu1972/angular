import { Component, OnInit } from '@angular/core';
import { CurrencyPipe, NgFor, AsyncPipe } from '@angular/common';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [CurrencyPipe, NgFor, AsyncPipe],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css'
})
export class ShippingComponent implements OnInit {
  constructor(private cartService: CartService) {}

  // ! tells compiler this shippingCosts will NOT be null
  shippingCosts!: Observable<{type: string, price: number}[]>;

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
