import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service/service.service';
@Component({
  selector: 'app-edit-zone',
  templateUrl: './edit-zone.component.html',
  styleUrls: ['./edit-zone.component.css']
})
export class EditZoneComponent implements OnInit{
  updatePForm:any;
  id: number = this.activatedRoute.snapshot.params['id'];
  constructor(private activatedRoute:ActivatedRoute,
    private service:ServiceService,
    private fb:FormBuilder,
    private router:Router) { }
  ngOnInit(): void {
    this.updatePForm=this.fb.group({
      nom:['',Validators.required]
      
    });
    this.getzoneById();
  }
  getzoneById(){
    this.service.getzoneById(this.id).subscribe((res)=>{
      console.log(res);
      this.updatePForm.patchValue(res);
    });
  }

  updatezoneById(){
    this.service.updatezone(this.id,this.updatePForm.value).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['zone']);
    })
  }

}
