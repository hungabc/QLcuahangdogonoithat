import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/lib/base.component';

@Component({
  selector: 'app-xemcart',
  templateUrl: './xemcart.component.html',
  styleUrls: ['./xemcart.component.css']
})
export class XemcartComponent extends BaseComponent implements OnInit {
giohang:any;
total:number;
tongsl:number
  constructor(injector:Injector) { super(injector)}

  ngOnInit(): void {
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
  plusItem(masp){
    this._cart.plusQuantity(masp);
  }
  minusItem(masp){
    this._cart.minusQuantity(masp);
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
