import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-zone',
  templateUrl: './list-zone.component.html',
  styleUrls: ['./list-zone.component.css']
})
export class ListZoneComponent implements OnInit{
  zones:any;
  btStyle={'border-radius': '5px'}


  constructor(private service:ServiceService,
    private router:Router) { }
  ngOnInit(): void {
   this.service.getAllzones().subscribe((data) => {
    this.zones = data;
   });
  }

  deleteZone(id:number){
    if(window.confirm("Etes-vous sure de vouloir supprimer la zone")){
      this.service.deletezone(id).subscribe((res)=>{
        console.log(res);
        this.router.navigate(['/zone'])
      });
    }
  }

}
