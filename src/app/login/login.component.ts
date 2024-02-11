import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { JwtService } from '../service/jwt.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm : any;

  constructor(
    private service: JwtService,
    private fb: FormBuilder,
    private router: Router,
    
    
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  submitForm() {
    this.service.login(this.loginForm.value).subscribe(
      (response) => {
        console.log('Token:',  response.jwt);
        localStorage.setItem('jwt',response.jwt);
        this.router.navigate(["/home"]);
      }
    )
  }

  
}
