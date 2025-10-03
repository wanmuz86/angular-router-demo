import { Component, OnInit } from '@angular/core';
// TO retrieve the passed id, we use ActivatedRoute Service
import { ActivatedRoute } from '@angular/router';
import { ProductDao } from '../models/product-dao';
import { Product } from '../services/product';
import { ProductApi } from '../services/product-api';
import { ProductApiDTO } from '../models/product-api-dto';
@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail implements OnInit{
  id = 0

  //local
  // product:ProductDao | undefined

  //api
  product:ProductApiDTO | undefined

  constructor(private activatedRoute:ActivatedRoute, 
    private productService:Product,
    private productApiService:ProductApi
  ){

  }

  ngOnInit(){
    // to get path variable /products/1
   //parseInt - to transform string into number , then pass it to the service
    this.id = parseInt(this.activatedRoute.snapshot.params['id']);

    // to get search parameters /products/1?sortOrder=asc&limit=10
    const sortOrder = this.activatedRoute.snapshot.queryParamMap.get('sortOrder')
    const limit = this.activatedRoute.snapshot.queryParamMap.get('limit')

    // Verify in developer console
    
  //  localhost:4200/products/1?sortOrder=asc&limit=10

    console.log(sortOrder);
    console.log(limit);

    console.log(this.id)

    // for data from local
    // this.product = this.productService.getProductById(this.id)
    // console.log(this.product)

    // for data from API

    this.productApiService.getProductById(this.id).subscribe(
      {
        next:(data)=> this.product = data,
        error:(error)=> console.log(error)
      }
    )


  }

}
