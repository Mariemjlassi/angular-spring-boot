import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
@Component({
  selector: 'app-add-arrondissement',
  templateUrl: './add-arrondissement.component.html',
  styleUrls: ['./add-arrondissement.component.css']
})
export class AddArrondissementComponent {
  arrForm : any;
  constructor(private fb:FormBuilder,private service:ServiceService,private router:Router) { 
    this.arrForm=this.fb.group({
     
      nom : ['',Validators.required],
      adresse : ['',Validators.required]
    })
  }

  fnaddArrondissement(){
    this.service.addArrondissement(this.arrForm.value).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/home']);
    })
  }

}
