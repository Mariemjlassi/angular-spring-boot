import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RueRoutingModule } from './rue-routing.module';
import { AddRueComponent } from './add-rue/add-rue.component';
import { EditRueComponent } from './edit-rue/edit-rue.component';


@NgModule({
  declarations: [
    AddRueComponent,
    EditRueComponent
  ],
  imports: [
    CommonModule,
    RueRoutingModule,
    ReactiveFormsModule
  ]
})
export class RueModule { }
