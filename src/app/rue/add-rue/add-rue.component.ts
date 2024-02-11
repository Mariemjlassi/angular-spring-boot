import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RueserviceService } from '../service/rueservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-rue',
  templateUrl: './add-rue.component.html',
  styleUrls: ['./add-rue.component.css']
})
export class AddRueComponent {
  rueForm : any;
  constructor(private fb:FormBuilder,
    private service:RueserviceService,
    private router:Router) {
      this.rueForm=this.fb.group({
        nom : ['',Validators.required]
      });
    }

    fnaddRue(){
      this.service.addrue(this.rueForm.value).subscribe((data)=>{
        console.log(data);
        this.router.navigate(['/rue']);
      })
    }

}
