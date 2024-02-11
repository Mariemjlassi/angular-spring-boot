import { Component, OnInit } from '@angular/core';
import { RueserviceService } from '../service/rueservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-rue',
  templateUrl: './list-rue.component.html',
  styleUrls: ['./list-rue.component.css']
})
export class ListRueComponent implements OnInit{
  rues: any[]=[];
  btStyle={'border-radius': '5px'}


  constructor(private service:RueserviceService,
              private router:Router){}
  ngOnInit(): void {
   this.service.getAllrues().subscribe((data) => {
    this.rues = data;
    console.log(data);
   });
  }

  deleteRue(id:number){
    if(window.confirm("Etes-vous sure de vouloir supprimer la rue")){
      this.service.deleterue(id).subscribe((res) => {
        console.log(res);
        this.router.navigate(['home'])

      })
    }
  }

}
