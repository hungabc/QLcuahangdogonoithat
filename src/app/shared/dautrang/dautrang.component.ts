import { AfterViewInit, Component, Injector, OnInit,Renderer2 } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/lib/base.component';
declare var $:any;

@Component({
  selector: 'app-dautrang',
  templateUrl: './dautrang.component.html',
  styleUrls: ['./dautrang.component.css']
})
export class DautrangComponent extends BaseComponent implements OnInit {
menus:any;
totalheader:any;
cartheader:any;
tongheader:any;
acc:any;
taikhoan:any;
isError:any;
public formdata:any;
public doneSetupForm: any;  

public isLogin:any;
  constructor(private fb:FormBuilder,injector:Injector) { 
    super(injector)
  }
  ngOnInit(): void {
    this._api.get('/api/Loaisp/get-all').takeUntil(this.unsubscribe).subscribe(res => {
      this.menus = res;
    }); 
    this.getAccount();
    this._cart.items.subscribe((res) => {
      this.totalheader = res? res.length:0;
    });
    setTimeout(() => {
      this.loadScripts();
    });
    this._cart.items.subscribe((res) => {
      this.cartheader = res;
      this.totalheader = res? res.length:0;
      this.tongheader=0;
      for(let x of this.cartheader){ 
        x.money = Number.parseInt(x.quantity) * Number.parseFloat(x.gia);
        this.tongheader +=x.money;
      
      } 
      
    });
  }
  clearCart() { 
    this._cart.clearCart();
    alert('Xóa thành công');
  }
  deleteItem(masp) {
    this._cart.deleteQuantity(masp);
  }
  plusItem(masp){
    this._cart.plusQuantity(masp);
  }
  minusItem(masp){
    this._cart.minusQuantity(masp);
  }
  formDangNhap(){
    this.doneSetupForm = false;
  this.isLogin = true;
    setTimeout(() => {
      $('#myModal').modal('toggle');
      this.formdata = this.fb.group({
        'tendangnhap': ['', Validators.required],
        'matkhau': ['', Validators.required],
        
      });
      this.doneSetupForm = true;
    });
  }
  getAccount(){
    let tg;
    this._login.items.subscribe((res) => {
      tg = res;
      this.taikhoan=tg[0];
    });
  }
  login(value){
  let tmp={
    tendangnhap:value.tendangnhap,
    matkhau:value.matkhau,
    dienthoai:value.tendangnhap,
    email:value.tendangnhap,
  }
  console.log(tmp);
  
    this._api.post('/api/ThanhVien/login',tmp).takeUntil(this.unsubscribe).subscribe(res => {
      this.acc = res;
   
      
      this.isError=false;
      if(this.acc){
        this.acc.matkhau='không biết';
        this._login.login(this.acc);
        console.log(this.acc);
        
        alert('đăng nhập thành công');
        $('#myModal').closest('.modal').modal('hide');
        if(this.acc.quyen===1){
       return window.history.back();}
       else return  window.open('localhost:4001', '_blank');//trang quản trị tab mới
      }
      else{
        this.isError=true;
        document.getElementById('error_bar').style.display='';
        document.getElementById('err_title').innerHTML='đăng nhập thất bại!'
        document.getElementById('err_mess').innerHTML='tên đăng nhập hoặc mật khẩu không chính xác.'
      }
    }); 
    
  }
  logOut(){
    if(confirm('bạn có muốn đăng xuất?'))
    {this._login.logOut();alert('đã đăng xuất');window.location.replace('')}
  }
  hide_error_bar(){
    document.getElementById('error_bar').style.display='none';
  }
}

