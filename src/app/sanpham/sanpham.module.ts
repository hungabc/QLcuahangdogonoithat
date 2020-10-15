import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChitietspComponent} from '../sanpham/chitietsp/chitietsp.component';
import { SanphamRoutingModule } from './sanpham.routing-module';
import { SanphamComponent } from './sanpham.component';
import { SptheoloaiComponent } from './sptheoloai/sptheoloai.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ChitietspComponent,SanphamComponent, SptheoloaiComponent
  ],
  imports: [
    CommonModule,
    SanphamRoutingModule,SharedModule
  ]
})
export class SanphamModule { }
