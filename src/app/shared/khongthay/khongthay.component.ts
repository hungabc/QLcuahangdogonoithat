import { Component, OnInit,Injector } from '@angular/core';
import { BaseComponent } from 'src/app/lib/base.component';

@Component({
  selector: 'app-khongthay',
  templateUrl: './khongthay.component.html',
  styleUrls: ['./khongthay.component.css']
})
export class KhongthayComponent  implements OnInit {

  constructor(injector: Injector) { 
  }

  ngOnInit(): void {

}
}
