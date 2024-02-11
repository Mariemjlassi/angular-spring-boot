import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements DoCheck{
  ismenuVisble!:boolean;
  constructor(private router:Router){}
  ngDoCheck(): void {
    let currentroute=this.router.url;
    if(currentroute=='/login' || currentroute=='/register'){
      this.ismenuVisble=false;
    }else{
      this.ismenuVisble=true;
    }
    }

    logout(){
      localStorage.removeItem('jwt');
      this.router.navigate(['/login']);
    }
  
}
