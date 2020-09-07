import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from'@angular/router';
import{SanphamComponent} from './sanpham.component'


const route:Routes=[
  {
    path: 'danh-sach',component:SanphamComponent,
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SanphamModule { }
