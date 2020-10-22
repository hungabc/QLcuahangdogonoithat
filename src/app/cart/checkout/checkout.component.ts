import { sha1 } from '@angular/compiler/src/i18n/digest';
import { Component, Inject, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  madonhang:any;
  
    constructor(injector:Injector) { super(injector)}
     themdon(value: any) {
      let  tendangnhap= 'sha1(value.ho_ten)';
      let khachhang= {TENDANGNHAP:tendangnhap,
        MATKHAU:null,
        HOTEN:value.ho+value.ten,
        GIOITINH:'nam',
        DIACHI:value.diachi,
        DIENTHOAI:value.dienthoai,
        EMAIL:value.email,
        QUYEN:1,
        MAKICHHOAT:null,
        KICHHOAT:1,
        };
        this._api.post('/api/Thanhvien/them-KH', khachhang).takeUntil(this.unsubscribe).subscribe(res => {
           }, err => { });   
      let donhang = {TENDANGNHAP:tendangnhap,
          DIACHINGUOINHAN:value.diachi
        };
        this._api.post('/api/DonHang/them-DH', donhang).takeUntil(this.unsubscribe).subscribe(res => {
         this.madonhang=res.MADH;
           }, err => { });   
     this.giohang.forEach(chitiet => {
       let chitietdonhang={MADH:this.madonhang,MASP:chitiet.masp,DONGIA:chitiet.gia ,SOLUONG:chitiet.quantity}
       this._api.post('/api/CHITIETdh/them-CTDH', chitietdonhang).takeUntil(this.unsubscribe).subscribe(res => {
         alert('đã thêm đơn hàng');
         this.clearCart();
      }, err => { });   
     });
   
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
        this.tongsl=res.length;
        for(let x of this.giohang){ 
          x.money = Number.parseInt(x.quantity) * Number.parseFloat(x.gia);
          this.total +=x.money;
        
        } 
        
      });
    } 
 
    clearCart() { 
      this._cart.clearCart();
      alert('Xóa thành công');
    }
    deleteItem(masp) {
      this._cart.deleteItem(masp);
      alert('Xóa thành công');
    }
    addQty(item, quantity){ 
      item.quantity =  quantity;
      item.money =  Number.parseInt(item.quantity) *  item.item_price;
      this._cart.addQty(item);
    }
  }
