import { Component, OnInit } from '@angular/core';
import { PropserviceService } from '../service/propservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-proprietaire',
  templateUrl: './list-proprietaire.component.html',
  styleUrls: ['./list-proprietaire.component.css']
})
export class ListProprietaireComponent implements OnInit {
  proprietaires :any[]=[];
  buttonStyle = { 'font-size': '1,5em' , 'width' : '6em','margin-top': '10px','border-radius': '5px','margin-left':'6px'};
  btStyle={'border-radius': '4px'}
  constructor(private service:PropserviceService,private router:Router) { }
  ngOnInit(): void {

    this.service.getAllProprietaire().subscribe((data : any[])=>{
      this.proprietaires=data;
      console.log(data);
    });
  }

  deleteProp(id:number){
    if(window.confirm("Etes-vous sure de vouloir supprimer le formateur")){
      this.service.deleteProprietaire(id).subscribe((res)=>{
        console.log(res);
        this.router.navigate(['proprietaire'])
      });
      
    }
    
  }
  

}
