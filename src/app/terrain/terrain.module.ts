import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerrainRoutingModule } from './terrain-routing.module';
import { AddTerrainComponent } from './add-terrain/add-terrain.component';
import { EditTerrainComponent } from './edit-terrain/edit-terrain.component';


@NgModule({
  declarations: [
    AddTerrainComponent,
    EditTerrainComponent
  ],
  imports: [
    CommonModule,
    TerrainRoutingModule
  ]
})
export class TerrainModule { }
