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
  menus:any;
  page: any;
  pageSize: any;
  allloai:any;
  totalItems:any;
  MALOAI:any;
  tenloai: any;
  constructor(injector: Injector) { 
    super(injector);
  }
  ngOnInit(): void {
    this._api.get('/api/Loaisp/get-all').takeUntil(this.unsubscribe).subscribe(res => {
      this.menus = res;
      
    }); 

    if(this.index==0||this.index==null) this.index=1;
    if(this.pageSize<10||this.pageSize==null) this.pageSize=10;
    this.sploai = [];
    this.page = 1;
    this.pageSize = 10;
    this._route.params.subscribe(params => {
      this.MALOAI=params["id"];
      console.log(this.MALOAI);
      
      this._api.get('/api/Sanpham/sp-theo-loai/'+this.MALOAI+'/1/10').takeUntil(this.unsubscribe).subscribe(ress => {
        this.sploai = ress;
        
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
