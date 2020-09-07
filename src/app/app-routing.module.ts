import{ KhongthayComponent} from './shared/khongthay/khongthay.component';;
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {path:'',loadChildren:()=>import('./home/home.component').then(m=>m.HomeComponent)},
  {path:'/tim-kiem',loadChildren:()=>import('./timkiem/timkiem.component').then(m=>m.TimkiemComponent)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
