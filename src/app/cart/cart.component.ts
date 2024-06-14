import { Component } from '@angular/core';
import { CurrencyPipe, NgFor} from '@angular/common';
import { CartService } from '../cart.service';
import { RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe, NgFor, RouterModule, ReactiveFormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group(
    {
      name: '',
      address: ''
    }
  );

  constructor(private cartService: CartService, private formBuilder: FormBuilder){}

  onSubmit(): void {
    this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
