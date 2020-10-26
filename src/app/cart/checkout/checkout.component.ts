import { sha1 } from '@angular/compiler/src/i18n/digest';
import { Component, Inject, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/lib/base.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent extends BaseComponent implements OnInit {
  giohang:any;
  total:number;
  tongsl:number;
  hoadonForm:FormGroup;
  donhang:any;

  
    constructor(injector:Injector,  public router: Router) { super(injector)}
     themdon(value: any) {
      let  tendangnhap= null;
      // let khachhang= {TENDANGNHAP:tendangnhap,
      //   MATKHAU:null,
      //   HOTEN:value.ho+value.ten,
      //   GIOITINH:'nam',
      //   DIACHI:value.diachi,
      //   DIENTHOAI:value.dienthoai,
      //   EMAIL:value.email,
      //   QUYEN:1,
      //   MAKICHHOAT:null,
      //   KICHHOAT:1,
      //   };
        // this._api.post('/api/Thanhvien/them-KH', khachhang).takeUntil(this.unsubscribe).subscribe(res => {
        //    }, err => { });   không cần thêm khách làm gì cả là bỏ k thêm kh à nếu mà nó đặt hàng lần 2 mà cũng tên cũ thì bị trùng tên
      let donhang = {
        TENDANGNHAP:tendangnhap,
        TENKH: value.ho+" "+value.ten,
        DIACHINGUOINHAN:value.diachi,
        SDT:value.dienthoai,
        EMAIL:value.email,
        };
        this._api.post('/api/DonHang/them-DH', donhang).takeUntil(this.unsubscribe).subscribe(res => {
         this.donhang=res;
         alert(this.donhang.madh);
           }, err => { });   
     this.giohang.forEach(chitiet => {
       let chitietdonhang={
         MADH:this.donhang.madh,
         MASP:chitiet.masp,
        GIA:chitiet.gia,
         SOLUONG:chitiet.quantity,
        }
       this._api.post('/api/CHITIETdh/them-CTDH', chitietdonhang).takeUntil(this.unsubscribe).subscribe(res => {
        
      }, err => { });   
     });
     this.clearCart();
     alert('đã thêm đơn hàng');
     this.router.navigate(['']);
    }
    ngOnInit(): void {
      this.hoadonForm = new FormGroup({
        ho: new FormControl('', Validators.required),
        ten: new FormControl('')  , 
        diachi: new FormControl('') ,  
        dienthoai: new FormControl('',Validators.min(10))  , 
        email: new FormControl('',Validators.email)     ,  
      });
      this._cart.items.subscribe((res) => {
        this.giohang = res;
        this.total = 0;
        this.tongsl=this.giohang ?res.length:0;
        for(let x of this.giohang){ 
          x.money = Number.parseInt(x.quantity) * Number.parseFloat(x.gia);
          this.total +=x.money;
        
        } 
        
      });
    } 
 
    clearCart() { 
      this._cart.clearCart();
     
    }
    deleteItem(masp) {
      this._cart.deleteItem(masp);
     
    }
    plusItem(masp){
      this._cart.plusQuantity(masp);
    }
    minusItem(masp){
      this._cart.minusQuantity(masp);
    }
    addQty(item, quantity){ 
      item.quantity =  quantity;
      item.money =  Number.parseInt(item.quantity) *  item.item_price;
      this._cart.addQty(item);
    }
  }
