import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { XemcartComponent } from './xemcart/xemcart.component';



@NgModule({
  declarations: [
    CartComponent,CheckoutComponent, XemcartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
