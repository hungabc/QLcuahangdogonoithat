import { Component, Injector, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/lib/base.component';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-sptheoloai',
  templateUrl: './sptheoloai.component.html',
  styleUrls: ['./sptheoloai.component.css']
})
export class SptheoloaiComponent extends BaseComponent implements OnInit {
  sploai: any;
  index:any;
  page: any;
  pageSize: any;
  allloai:any;
  totalItems:any;
  MALOAI:any;
  constructor(injector: Injector) { 
    super(injector);
  }
  ngOnInit(): void {
    if(this.index==0||this.index==null) this.index=1;
    if(this.pageSize<10||this.pageSize==null) this.pageSize=10;
    this.sploai = [];
    this.page = 1;
    this.pageSize = 10;
    this._route.params.subscribe(params => {
      this.MALOAI=params["id"];
      
      this._api.get('api/sanpham/sp-theo-loai/phong-ngu/1/12').takeUntil(this.unsubscribe).subscribe(res => {
        this.sploai = res.data;
        this.totalItems = res.totalItems;
        setTimeout(() => {
         this.loadScripts(); 
        });
        }, err => { });       
   });    
   }
 
addToCart(it) { 
  this._cart.addToCart(it);
  alert('Thêm thành công!'); 
}
}
