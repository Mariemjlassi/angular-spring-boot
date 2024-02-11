import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';

import { AddProprietaireComponent } from './proprietaire/add-proprietaire/add-proprietaire.component';
import { TableModule } from 'primeng/table';
import {  ButtonModule } from 'primeng/button';
import { ListArrondissementComponent } from './arrondissement/list-arrondissement/list-arrondissement.component';
import { ListZoneComponent } from './zone/list-zone/list-zone.component';
import { ListRueComponent } from './rue/list-rue/list-rue.component';
import { ListTerrainComponent } from './terrain/list-terrain/list-terrain.component';
import { GerertaxeComponent } from './gerertaxe/gerertaxe/gerertaxe.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    RegisterComponent,
    AddProprietaireComponent,
    ListArrondissementComponent,
    ListZoneComponent,
    ListRueComponent,
    ListTerrainComponent,
    GerertaxeComponent,
   

    
    
    


    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    CardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
