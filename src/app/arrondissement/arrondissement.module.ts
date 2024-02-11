import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArrondissementRoutingModule } from './arrondissement-routing.module';
import { AddArrondissementComponent } from './add-arrondissement/add-arrondissement.component';
import { EditArrondissementComponent } from './edit-arrondissement/edit-arrondissement.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddArrondissementComponent,
    EditArrondissementComponent,
    
  ],
  imports: [
    CommonModule,
    ArrondissementRoutingModule,
    ReactiveFormsModule
  ]
})
export class ArrondissementModule { }
