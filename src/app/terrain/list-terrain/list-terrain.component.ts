import { Component, OnInit } from '@angular/core';
import { TerrainserviceService } from '../service/terrainservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-terrain',
  templateUrl: './list-terrain.component.html',
  styleUrls: ['./list-terrain.component.css']
})
export class ListTerrainComponent implements OnInit{
  terrains:any;
  constructor(private terrainService:TerrainserviceService,private router:Router) {}
  ngOnInit(): void {
    this.terrainService.getAllTerrains().subscribe((data)=>{
      this.terrains=data;
    });
  }

  deleteTerrain(id:number){
    if(window.confirm("Etes-vous sure de vouloir supprimer le terrain")){
      this.terrainService.deleteTerrain(id).subscribe((res)=>{
        console.log(res);
        this.router.navigate(['terrain'])
      });
      
    }
    
  }
}
