import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router=inject(Router)
  if(sessionStorage.getItem('token')){
 return true;
  }
  else{
    alert("Unauthorized access ,Please login!!");
    router.navigateByUrl('/login')
    return false;
  }
 
};
