
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChitietspComponent} from './chitietsp/chitietsp.component';
import { SanphamComponent } from './sanpham.component';
import { SptheoloaiComponent } from './sptheoloai/sptheoloai.component';
import { from } from 'rxjs';

const routes: Routes = [
{ path:'',component:SanphamComponent
},
{
  path: 'chitiet/:id',
  component: ChitietspComponent,
},
{
  path: 'sploai/:id',
  component: SptheoloaiComponent,
},
];  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SanphamRoutingModule { }