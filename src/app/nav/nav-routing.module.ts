import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { guardGuard } from '../guard/guard.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent,canActivate:[guardGuard]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavRoutingModule { }
