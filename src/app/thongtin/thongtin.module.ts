import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LienheComponent } from './lienhe/lienhe.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { ThongtinRoutingModule } from './thongtin.routing-module';

@NgModule({
  declarations: [
    LienheComponent,GioithieuComponent,
  ],
  imports: [
    CommonModule,
    ThongtinRoutingModule,SharedModule
  ]
})
export class SanphamModule { }
