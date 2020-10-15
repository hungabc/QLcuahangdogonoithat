import{ KhongthayComponent} from './shared/khongthay/khongthay.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
{path:'',component:HomeComponent},
{path:'san-pham',loadChildren:()=>import('./sanpham/sanpham.module').then(x=>x.SanphamModule)},
{path:'**',component:KhongthayComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
