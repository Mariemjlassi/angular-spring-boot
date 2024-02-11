import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PropserviceService } from '../service/propservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-proprietaire',
  templateUrl: './add-proprietaire.component.html',
  styleUrls: ['./add-proprietaire.component.css']
})
export class AddProprietaireComponent {
  PropForm : any;
  constructor(private fb:FormBuilder,private service:PropserviceService,private router:Router){
    this.PropForm=this.fb.group({
     
      nom : ['',Validators.required],
      prenom :['',Validators.required],
      cin : ['',Validators.required],
      adresse : ['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
    })

  }

  fnaddProp(){
    this.service.addProprietaire(this.PropForm.value).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/home']);
    })
  }

}
