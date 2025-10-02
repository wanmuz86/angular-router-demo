import { Component } from '@angular/core';
// Dependency Injection is used when we want to add Service into our component
// Service -> normally used inside .ts
// Dependency Injection - 1) Import
import {Router} from '@angular/router'

@Component({
  selector: 'app-page-not-found',
  imports: [],
  templateUrl: './page-not-found.html',
  styleUrl: './page-not-found.css'
})
export class PageNotFound {

  // Dependency Injection - 2) Inject
  constructor(private router:Router){

  }

  goToHome(){
      // Dependency Injection - 3) Implement
    this.router.navigate(['/'])
  }
}
