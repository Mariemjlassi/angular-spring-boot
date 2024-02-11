import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-arrondissement',
  templateUrl: './list-arrondissement.component.html',
  styleUrls: ['./list-arrondissement.component.css']
})
export class ListArrondissementComponent implements OnInit {
  arrondissements : any[]=[];
  buttonStyle = { 'font-size': '1,5em' , 'width' : '6em','margin-top': '10px','border-radius': '5px','margin-left':'6px'};
  btStyle={'border-radius': '5px'}

  constructor(private service:ServiceService,private router:Router) {}

  ngOnInit(): void {
    this.service.getAllArrondissements().subscribe((data) => {
      this.arrondissements = data;
      console.log(data);
    });
  }

  deleteArrondissement(id:number){
    if(window.confirm("Etes-vous sure de vouloir supprimer l'arrondissement")){
      this.service.deleteArrondissement(id).subscribe((res)=>{
        console.log(res);
        this.router.navigate(['/home'])
      });
  }

}
}
