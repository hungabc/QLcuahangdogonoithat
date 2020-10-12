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
  page: any;
  pageSize: any;
  allloai:any;
  totalItems:any;
  MALOAI:any;
  constructor(injector: Injector) { 
    super(injector);
  }
  ngOnInit(): void {
  }
   
}
