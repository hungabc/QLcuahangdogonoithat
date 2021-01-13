import { AfterViewInit, Component, Injector, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/lib/base.component';
declare var $: any;

@Component({
  selector: 'app-dautrang',
  templateUrl: './dautrang.component.html',
  styleUrls: ['./dautrang.component.css']
})
export class DautrangComponent extends BaseComponent implements OnInit {
  menus: any;
  totalheader: any;
  cartheader: any;
  tongheader: any;
  acc: any;
  taikhoan: any;
  isError: any;
  public formdata: any;
  public formdangky: any;
  public doneSetupForm: any;
  danhsachloi :any;
  public isLogin: any;
  constructor(private fb: FormBuilder, injector: Injector) {
    super(injector)
  }
  ngOnInit(): void {
    this._api.get('/api/Loaisp/get-all').takeUntil(this.unsubscribe).subscribe(res => {
      this.menus = res;
    });
    this.getAccount();
    this._cart.items.subscribe((res) => {
      this.totalheader = res ? res.length : 0;
    });
    setTimeout(() => {
      this.loadScripts();
    });
    this._cart.items.subscribe((res) => {
      this.cartheader = res;
      this.totalheader = res ? res.length : 0;
      this.tongheader = 0;
      for (let x of this.cartheader) {
        x.money = Number.parseInt(x.quantity) * Number.parseFloat(x.gia);
        this.tongheader += x.money;

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
  plusItem(masp) {
    this._cart.plusQuantity(masp);
  }
  minusItem(masp) {
    this._cart.minusQuantity(masp);
  }
  formDangNhap() {
    this.doneSetupForm = false;
    this.isLogin = true;
    setTimeout(() => {
      document.getElementById('dangnhap-tab').className='active';
      document.getElementById('dangky-tab').className='abc';
      document.getElementById('Registration').className='tab-pane fade';
      document.getElementById('Login').className='tab-pane active';
      $('#myModal').modal('show');
      this.formdata = this.fb.group({
        'tendangnhap': ['', Validators.required],
        'matkhau': ['', Validators.required],

      });
      this.doneSetupForm = true;
    });
  }
  formDangKy() {
    this.doneSetupForm = false;
    this.isLogin = false;
    setTimeout(() => {
      document.getElementById('dangnhap-tab').className='deoco';
      document.getElementById('dangky-tab').className='active';
      document.getElementById('Registration').className='tab-pane active';
      document.getElementById('Login').className='tab-pane fade';
      $('#myModal').modal('show');
     
      this.formdangky = this.fb.group({
        'tendangnhap': ['', Validators.required],
        'hoten': ['', Validators.required],
        'email': ['', Validators.required],
        'mk': ['', Validators.required],
        'remk': ['', Validators.required],
        'ngaysinh': [''],
        'gioitinh': [''],
        'diachi': ['', Validators.required],
        'dienthoai': ['', Validators.required],
      });
      this.doneSetupForm = true;
    });
  }
  getAccount() {
    let tg;
    this._login.items.subscribe((res) => {
      tg = res;
      this.taikhoan = tg[0];
    });
  }
  
  register(value){
    this.danhsachloi=[];
   
    if(value.tendangnhap==""){
      this.danhsachloi['username']="ban chua nhap ten dang nhap";
     
    }
    if(value.sodienthoai==""){
      this.danhsachloi['phone']="ban chua nhap sdt";
     
    }
    if(value.hoten==""){
      this.danhsachloi['name']="ban chua nhap hoten";
      
    }
    if(value.mk==""){
      this.danhsachloi['password']="ban chua nhap mat khau";
      
    }
    else if(value.mk.length<6){
      this.danhsachloi['passwordlength']="mat khau phai co it nhat 6 ky tu";
     
    }
    if(value.remk==""){
      this.danhsachloi['repassword']="ban chua nhap lai mat khau";
     
    }
    else 
    if(value.mk!=value.remk){
      this.danhsachloi['mustmatch']="mat khau nhap lai khong khop";
      
    }
    if(true){
    let tmp = {
      tendangnhap: value.tendangnhap,
      sodienthoai: value.sodienthoai,
      email: value.email,
      hoten:value.hoten,
      mk:value.mk,
      remk:value.remk,
      ngaysinh:value.ngaysinh,
      gioitinh:value.gioitinh,
      diach:value.diachi,
      quyen:1,
    }
   
    this._api.post('/api/ThanhVien/them-KH', tmp).takeUntil(this.unsubscribe).subscribe(res => {
      this.acc = res;
      this.isError = false;
      if (this.acc) {
        this._login.login(this.acc);
     

        alert('đăng ký thành công');
        $('#myModal').closest('.modal').modal('hide');
        if (this.acc.quyen === 1) {
          return window.location.reload();
        }
        else return window.open('localhost:4201', '_blank');//trang quản trị tab mới
      }
      else {
        this.isError = true;
        document.getElementById('error_bar').style.display = '';
        document.getElementById('err_title').innerHTML = 'đăng ký thất bại!'
        document.getElementById('err_mess').innerHTML = 'tên đăng nhập,email, hoặc số điện thoại đã tồn tại.'
      }
    });}
  }
  login(value) {
    let tmp = {
      tendangnhap: value.tendangnhap,
      matkhau: value.matkhau,
      dienthoai: value.tendangnhap,
      email: value.tendangnhap,
    }
    this._api.post('/api/ThanhVien/login', tmp).takeUntil(this.unsubscribe).subscribe(res => {
      this.acc = res;


      this.isError = false;
      if (this.acc) {
        this._login.login(this.acc);
        console.log(this.acc);

        alert('đăng nhập thành công');
        $('#myModal').closest('.modal').modal('hide');
        if (this.acc.quyen === 1) {
          return window.location.reload();
        }
        else return window.open('localhost:4201','_blank');//trang quản trị tab mới
      }
      else {
        this.isError = true;
        document.getElementById('error_bar').style.display = '';
        document.getElementById('err_title').innerHTML = 'đăng nhập thất bại!'
        document.getElementById('err_mess').innerHTML = 'tên đăng nhập hoặc mật khẩu không chính xác.'
      }
    });

  }
  logOut() {
    if (confirm('bạn có muốn đăng xuất?')) { this._login.logOut(); alert('đã đăng xuất'); window.location.replace('') }
  }
  hide_error_bar() {
    document.getElementById('error_bar').style.display = 'none';
  }
}

