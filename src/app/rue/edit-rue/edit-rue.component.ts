import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RueserviceService } from '../service/rueservice.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-rue',
  templateUrl: './edit-rue.component.html',
  styleUrls: ['./edit-rue.component.css']
})
export class EditRueComponent implements OnInit{
  updatePForm:any;
  id: number = this.activatedRoute.snapshot.params['id'];
  constructor(private activatedRoute:ActivatedRoute,
    private service:RueserviceService,
    private fb:FormBuilder,
    private router:Router) { }
    ngOnInit(): void {
      this.updatePForm=this.fb.group({
        nom:['',Validators.required]
        
      });
      this.getrueById();
    }
    getrueById(){
      this.service.getrueById(this.id).subscribe((res)=>{
        console.log(res);
        this.updatePForm.patchValue(res);
      });
    }

    updaterueById(){
      this.service.updaterue(this.id,this.updatePForm.value).subscribe((res)=>{
        console.log(res);
        this.router.navigate(['rue']);
      })
    }
}
