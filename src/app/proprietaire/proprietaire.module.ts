import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProprietaireRoutingModule } from './proprietaire-routing.module';
import { ListProprietaireComponent } from './list-proprietaire/list-proprietaire.component';
import { EditProprietaireComponent } from './edit-proprietaire/edit-proprietaire.component';
import {  ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [
    ListProprietaireComponent,
    EditProprietaireComponent
  ],
  imports: [
    CommonModule,
    ProprietaireRoutingModule,ReactiveFormsModule,
    ButtonModule,
    TableModule
  ]
})
export class ProprietaireModule { }
