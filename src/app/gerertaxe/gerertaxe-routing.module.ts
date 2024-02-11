import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerertaxeComponent } from './gerertaxe/gerertaxe.component';
import { guardGuard } from '../guard/guard.guard';

const routes: Routes = [
  { path: "", component: GerertaxeComponent, canActivate: [guardGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GerertaxeRoutingModule { }
