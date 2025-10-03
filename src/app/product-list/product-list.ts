import { Component, OnInit } from '@angular/core';
import { Product } from '../services/product';
import { ProductDao } from '../models/product-dao';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ProductApi } from '../services/product-api';
import { ProductApiDTO } from '../models/product-api-dto';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit{

  // This is for local/mock data
  //products : ProductDao[] = [];

  // This is for API Data
  products : ProductApiDTO[] = [];
  
  constructor(
    private productService:Product,
    private productApiService:ProductApi
  
  ){

  }
  ngOnInit(){
    // this is using mock data
   // this.products = this.productService.getProducts()

   // this is is using API
   // Get the data from API
   this.productApiService.getAllProducts().subscribe(
    {
      // If successful store the data in this.products
      next:(data)=> this.products = data,
      // If it is an error, show the error on log
      error:(error)=> console.log(error)
    }
   )
  }

}
