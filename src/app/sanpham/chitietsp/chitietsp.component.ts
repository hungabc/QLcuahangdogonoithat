import { Component, OnInit,Injector } from '@angular/core';
import { BaseComponent } from 'src/app/lib/base.component';

@Component({
  selector: 'app-chitietsp',
  templateUrl: './chitietsp.component.html',
  styleUrls: ['./chitietsp.component.css']
})
export class ChitietspComponent extends BaseComponent implements OnInit {
  item:any;
  total:any;
  menus:any;
    constructor( injector:Injector) { 
      super(injector)
    }
    ngOnInit(): void {
          this._api.get('/api/Loaisp/get-all').takeUntil(this.unsubscribe).subscribe(res => {
      this.menus = res;
      
    }); 

      this.item = {};
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('/api/sanpham/gettheomasp/'+id).takeUntil(this.unsubscribe).subscribe(res => {
        this.item = res;
        setTimeout(() => {
          this.loadScripts();
        });
      }); 
    });
    }
  addToCart(it) { 
    this._cart.addToCart(it);
    alert('Thêm thành công!'); 
  }
}
