import { CartService } from './cart.service';
import { Injector, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of as observableOf, Subject } from 'rxjs';
import { ApiService } from './api.service';
import { LoginService } from './login.service';
export class BaseComponent {
   public unsubscribe = new Subject();
   public _renderer:any;
   public _api: ApiService;
   public _cart: CartService;
   public _route: ActivatedRoute;
   public _login:LoginService;
   constructor(injector: Injector) {  
      this._renderer = injector.get(Renderer2);
      this._api = injector.get(ApiService);
      this._cart = injector.get(CartService);
      this._route = injector.get(ActivatedRoute);
      this._login = injector.get(LoginService);
      } 
      public loadScripts() {
         this.renderExternalScript('assets/js/layout.js').onload = () => {
         }
         this.renderExternalScript('assets/js/shoppingCart.js').onload = () => {
         }
         this.renderExternalScript('assets/js/jquery.actual.js').onload = () => {
         }
         this.renderExternalScript('assets/js/login.js').onload = () => {
         }
          this.renderExternalScript('assets/js/checkout.js').onload = () => {
         }
         this.renderExternalScript('assets/js/contact-us.js').onload = () => {
         }
          this.renderExternalScript('assets/js/theme-script.js').onload = () => {
         }
         this.renderExternalScript('assets/js/option4.js').onload = () => {
         }
       }
       public renderExternalScript(src: string): HTMLScriptElement {
         const script = document.createElement('script');
         script.type = 'text/javascript';
         script.src = src;
         script.async = true;
         script.defer = true;
         this._renderer.appendChild(document.body, script);
         return script;
       }
}