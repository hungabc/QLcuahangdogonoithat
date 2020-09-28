import { Component, OnInit,Injector } from '@angular/core';
import { BaseComponent } from 'src/app/lib/base.component';

@Component({
  selector: 'app-chitietsp',
  templateUrl: './chitietsp.component.html',
  styleUrls: ['./chitietsp.component.css']
})
export class ChitietspComponent extends BaseComponent implements OnInit {

  constructor(injector: Injector) { 
    super(injector);
  }

  ngOnInit(): void {
    // Observable.combineLatest(
    //   this._api.get('/api/item/get-all'),
    // ).takeUntil(this.unsubscribe).subscribe(res => {
    //   this.list_item = res[0];
    //   setTimeout(() => {
        this.loadScripts();
  //     });
  //   }, err => { });
  // }
  
  // addToCart(it) { 
  //   this._cart.addToCart(it);
  //   alert('Thêm thành công!'); 
  // }
}
}
