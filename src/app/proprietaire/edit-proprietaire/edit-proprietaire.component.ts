import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropserviceService } from '../service/propservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-proprietaire',
  templateUrl: './edit-proprietaire.component.html',
  styleUrls: ['./edit-proprietaire.component.css']
})
export class EditProprietaireComponent implements OnInit{
  updatePForm:any;
  id: number = this.activatedRoute.snapshot.params['id'];
  constructor(private activatedRoute:ActivatedRoute,
    private service:PropserviceService,
    private fb:FormBuilder,
    private router:Router) { }

    
  ngOnInit(): void {
    this.updatePForm=this.fb.group({
      nom:['',Validators.required],
      prenom :['',Validators.required],
      cin : ['',Validators.required],
      adresse : ['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tel:['',Validators.required]
    })
    this.getPropById();
  }

  getPropById(){
    this.service.getPropById(this.id).subscribe((res)=>{
      console.log(res);
      this.updatePForm.patchValue(res);
    })
  }

  updatePropById(){
    this.service.updateProprietaire(this.id,this.updatePForm.value).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['proprietaire']);
    })
  }

}
