import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZoneRoutingModule } from './zone-routing.module';
import { EditZoneComponent } from './edit-zone/edit-zone.component';
import { AddZoneComponent } from './add-zone/add-zone.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [
    EditZoneComponent,
    AddZoneComponent
  ],
  imports: [
    CommonModule,
    ZoneRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    TableModule
  ]
})
export class ZoneModule { }
