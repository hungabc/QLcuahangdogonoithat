import { AfterViewInit, Component, Injector, OnInit,Renderer2 } from '@angular/core';
import { BaseComponent } from 'src/app/lib/base.component';

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
  constructor( injector:Injector) { 
    super(injector)
  }
  ngOnInit(): void {
    this._api.get('/api/Loaisp/get-all').takeUntil(this.unsubscribe).subscribe(res => {
      this.menus = res;
    }); 
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
  deleteItem(masp) {
    this._cart.deleteQuantity(masp);
  }
  plusItem(masp){
    this._cart.plusQuantity(masp);
  }
  minusItem(masp){
    this._cart.minusQuantity(masp);
  }
}

