
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChitietspComponent } from './chitietsp/chitietsp.component';
import { SanphamComponent } from './sanpham.component';
import { SptheoloaiComponent } from './sptheoloai/sptheoloai.component';

const routes: Routes = [
{ path:'',component:SanphamComponent
},
{path:'sptheoloai',component:SptheoloaiComponent},
{path:'chi-tiet',component:ChitietspComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SanphamRoutingModule { }