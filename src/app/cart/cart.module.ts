import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CheckoutComponent } from './checkout/checkout.component';



@NgModule({
  declarations: [
    CartComponent,CheckoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
