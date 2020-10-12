import { Component, OnInit,Renderer2,Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseComponent } from '../lib/base.component';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  extends BaseComponent implements OnInit {
  list_item:any; list: any;
    page: any;
    pageSize: any;
    totalItems:any;
  constructor(injector:Injector) {
    super(injector)
   }
  ngOnInit(): void {
    Observable.combineLatest(
      this._api.get('api/SanPham/get-all'),
    ).takeUntil(this.unsubscribe).subscribe(res => {
      this.list_item = res[0];
    }, err => { });
    this.list = [];
    this.page = 1;
    this.pageSize = 5;
    this._route.params.subscribe(params => {
      this._api.post('api/SanPham/sp-phan-trang', { page: this.page, pageSize: this.pageSize}).takeUntil(this.unsubscribe).subscribe(res => {
        this.list = res.data;
        this.totalItems = res.totalItems;
        }, err => { });       
   });    
   }
    loadPage(page) { 
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.post('api/SanPham/sp-phan-trang', { page: page, pageSize: this.pageSize, item_group_id: id}).takeUntil(this.unsubscribe).subscribe(res => {
        this.list = res.data;
        this.totalItems = res.totalItems;
        }, err => { });       
   });   
  }
 
  addToCart(it) { 
    this._cart.addToCart(it);
    alert('Thêm thành công!'); 
  }
}
