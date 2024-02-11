import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { GerertaxeComponent } from './gerertaxe/gerertaxe/gerertaxe.component';



const routes: Routes = [
  {
    path : "",redirectTo: "login", pathMatch:"full"
  },
  {
    path: "login",component:LoginComponent
  },
  {
    path: "register", component:RegisterComponent
  },
  {
    path: "home",loadChildren:()=>import('./nav/nav.module').then(m=>m.NavModule)
  },
  {
    path: "gerertaxe", component:GerertaxeComponent
  },
  {
    path:"proprietaire",loadChildren:()=>import('./proprietaire/proprietaire.module').then(m=>m.ProprietaireModule)
  },
  {
    path:"arrondissement", loadChildren:()=>import('./arrondissement/arrondissement.module').then(m=>m.ArrondissementModule)
  },
  {
    path:"zone", loadChildren:() => import('./zone/zone.module').then(m=>m.ZoneModule) ,
  },
  {
    path:"rue", loadChildren:()=> import('./rue/rue.module').then(m=>m.RueModule)
  },
  {
    path:"terrain", loadChildren:()=> import('./terrain/terrain.module').then(m=>m.TerrainModule)
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
