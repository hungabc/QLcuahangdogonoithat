import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuoitrangComponent } from './shared/cuoitrang/cuoitrang.component';
import { DautrangComponent } from './shared/dautrang/dautrang.component';
import { HomeComponent } from './home/home.component';
import { TimkiemComponent } from './timkiem/timkiem.component';
import { TintucComponent } from './tintuc/tintuc.component';
// import { SanphamComponent } from './sanpham/sanpham.component';
// import { ChitietspComponent } from './sanpham/chitietsp/chitietsp.component';
import { KhongthayComponent } from './shared/khongthay/khongthay.component';
// import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
// import { CheckoutComponent } from './cart/checkout/checkout.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    CuoitrangComponent,
    DautrangComponent,
    HomeComponent,
    TimkiemComponent,
    TintucComponent,
    // SanphamComponent,
    // ChitietspComponent,
    KhongthayComponent,
    // CartComponent,
    LoginComponent,
    // CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
