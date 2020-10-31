import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PhongkhachComponent } from './phongkhach/phongkhach.component';
import { PhonganComponent } from './phongan/phongan.component';
import { PhongbepComponent } from './phongbep/phongbep.component';
import { PhonglamviecComponent } from './phonglamviec/phonglamviec.component';
import { PhongnguComponent } from './phongngu/phongngu.component';
import { TuvanRoutingModule } from './tuvan.routing-module';

@NgModule({
  declarations: [
    PhongkhachComponent,PhonganComponent,PhongbepComponent,PhonglamviecComponent,PhongnguComponent,
  ],
  imports: [
    CommonModule,
    TuvanRoutingModule,SharedModule
  ]
})
export class TuvanModule { }
