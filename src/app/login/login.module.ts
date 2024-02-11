import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { LoginRoutingModule } from './login-routing.module';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ToastModule,
    InputGroupModule,
    InputGroupAddonModule
  
  ]
})
export class LoginModule { }
