
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LienheComponent } from './lienhe/lienhe.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';

const routes: Routes = [
  {
    path: 'lien-he',
    component: LienheComponent,
  },
  {
    path: 'gioi-thieu',
    component: GioithieuComponent,
  },
  {path:'thong-tin',loadChildren:()=>import('../thongtin/thongtin.module').then(x=>x.ThongtinModule)},
];  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThongtinRoutingModule { }