import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhongkhachComponent } from './phongkhach/phongkhach.component';
import { PhonganComponent } from './phongan/phongan.component';
import { PhongbepComponent } from './phongbep/phongbep.component';
import { PhonglamviecComponent } from './phonglamviec/phonglamviec.component';
import { PhongnguComponent } from './phongngu/phongngu.component';

const routes: Routes = [
{
  path: 'phong-khach',
  component: PhongkhachComponent,
},
{
  path: 'phong-ngu',
  component: PhongnguComponent,
},
{
  path: 'phong-an',
  component: PhonganComponent,
},
{
  path: 'phong-lam-viec',
  component: PhonglamviecComponent,
},
{
  path: 'phong-bep',
  component: PhongbepComponent,
},
];  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TuvanRoutingModule { }