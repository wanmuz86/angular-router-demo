import { Component, OnInit } from '@angular/core';
// TO retrieve the passed id, we use ActivatedRoute Service
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail implements OnInit{
  id = 0

  constructor(private activatedRoute:ActivatedRoute){

  }

  ngOnInit(){
    this.id = this.activatedRoute.snapshot.params['id'];

    const sortOrder = this.activatedRoute.snapshot.queryParamMap.get('sortOrder')
    const limit = this.activatedRoute.snapshot.queryParamMap.get('limit')

    // Verify in developer console
    
  //  localhost:4200/products/1?sortOrder=asc&limit=10

    console.log(sortOrder);
    console.log(limit);
  }

}
