import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/lib/base.component';

@Component({
  selector: 'app-sanpham',
  templateUrl: './sanpham.component.html',
  styleUrls: ['./sanpham.component.css']
})
export class SanphamComponent extends BaseComponent implements OnInit {
  list:any;
  total:any;
    constructor( injector:Injector) { 
      super(injector)
    }
    ngOnInit(): void {
      this._api.get('api/Sanpham/get-all').takeUntil(this.unsubscribe).subscribe(res => {
        this.list = res;
      }); 
      this._cart.items.subscribe((res) => {
        this.total = res? res.length:0;
      });
      setTimeout(() => {
        this.loadScripts();
      });
    }
  addToCart(it) { 
    this._cart.addToCart(it);
    alert('Thêm thành công!'); 
  }
}
