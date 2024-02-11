import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-add-zone',
  templateUrl: './add-zone.component.html',
  styleUrls: ['./add-zone.component.css']
})
export class AddZoneComponent {
  zoneForm : any;
  constructor(private fb:FormBuilder,
    private service:ServiceService,
    private router:Router) {
      this.zoneForm = this.fb.group({
        nom : ['',Validators.required]
      });
     }

     fnaddZone(){
      this.service.addzone(this.zoneForm.value).subscribe((data)=>{
        console.log(data);
        this.router.navigate(['/home']);
      })
     }

}
