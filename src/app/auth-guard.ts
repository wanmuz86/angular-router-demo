import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)

  // Retrieve the token from local storage
  const isLoggedIn = localStorage.getItem('token')
  // if the token exists
  if (isLoggedIn){
    // allow the user to go to the page
    //in reality we check if the token is valid or not
    return true;
  }
  // redirect to home page
  alert("not authorized")
  return router.parseUrl('/')
  
};
