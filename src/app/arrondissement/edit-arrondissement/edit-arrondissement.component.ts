import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-arrondissement',
  templateUrl: './edit-arrondissement.component.html',
  styleUrls: ['./edit-arrondissement.component.css']
})
export class EditArrondissementComponent implements OnInit {
  updatePForm:any;
  id: number = this.activatedRoute.snapshot.params['id'];
  constructor(private activatedRoute:ActivatedRoute,
    private service:ServiceService,
    private fb:FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
    this.updatePForm=this.fb.group({
      nom:['',Validators.required],
      prenom :['',Validators.required],
      cin : ['',Validators.required],
      adresse : ['',Validators.required]
    });
    this.getArrondissementById();
  }
  getArrondissementById(){
    this.service.getArrondissementById(this.id).subscribe((res)=>{
      console.log(res);
      this.updatePForm.patchValue(res);
    });
  }

  updateArrondissementById(){
    this.service.updateArrondissement(this.id,this.updatePForm.value).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['arrondissement']);
    })
  }

}
