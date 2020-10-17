import { AfterViewInit, Component, Injector, OnInit,Renderer2 } from '@angular/core';
import { BaseComponent } from 'src/app/lib/base.component';

@Component({
  selector: 'app-dautrang',
  templateUrl: './dautrang.component.html',
  styleUrls: ['./dautrang.component.css']
})
export class DautrangComponent extends BaseComponent implements OnInit {
menus:any;
total:any;
  constructor( injector:Injector) { 
    super(injector)
  }
  ngOnInit(): void {
    this._api.get('/api/Loaisp/get-all').takeUntil(this.unsubscribe).subscribe(res => {
      this.menus = res;
    }); 
    this._cart.items.subscribe((res) => {
      this.total = res? res.length:0;
    });
    setTimeout(() => {
      this.loadScripts();
    });
  }
}
