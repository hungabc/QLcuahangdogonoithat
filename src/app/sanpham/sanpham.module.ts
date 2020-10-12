import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChitietspComponent} from '../sanpham/chitietsp/chitietsp.component';
import { SanphamRoutingModule } from './sanpham.routing-module';
import { SanphamComponent } from './sanpham.component';
import { SptheoloaiComponent } from './sptheoloai/sptheoloai.component';
import { KhosanphamComponent } from './khosanpham/khosanpham.component';





@NgModule({
  declarations: [
    ChitietspComponent,SanphamComponent, SptheoloaiComponent, KhosanphamComponent
  ],
  imports: [
    CommonModule,
    SanphamRoutingModule
  ]
})
export class SanphamModule { }
