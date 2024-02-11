import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeSelectModule } from 'primeng/treeselect';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GerertaxeRoutingModule } from './gerertaxe-routing.module';
import { DividerModule } from 'primeng/divider';
import { InputMaskModule } from 'primeng/inputmask';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GerertaxeRoutingModule,
    TreeSelectModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    DividerModule,
    InputMaskModule
  ]
})
export class GerertaxeModule { }
