import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { XemcartComponent } from './xemcart/xemcart.component';
import {Routes,RouterModule } from "@angular/router";
import { SharedModule } from '../shared/shared.module';
const routes:Routes=[
{path:'',component:CartComponent,children:[
{path:'',component:XemcartComponent},
{path:'check-out',component:CheckoutComponent}]}
]

@NgModule({
  declarations: [
    CartComponent,CheckoutComponent, XemcartComponent
  ],
  imports: [
    CommonModule,SharedModule,RouterModule.forChild(routes)
  ]
})
export class CartModule { }
