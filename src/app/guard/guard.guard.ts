import { CanActivateFn, Router } from '@angular/router';
import { JwtService } from '../service/jwt.service';
import { inject } from '@angular/core';
export const guardGuard: CanActivateFn = (route, state) => {
  const authService= inject (JwtService);
  const router = inject(Router);
  if(authService.isAuthenticated()){
    return true;
  }else{
    router.navigate(['/login']);
    return false;
  }
};
