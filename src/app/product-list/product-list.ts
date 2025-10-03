import { Component, OnInit } from '@angular/core';
import { Product } from '../services/product';
import { ProductDao } from '../models/product-dao';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit{

  products : ProductDao[] = [];
  constructor(private productService:Product){

  }
  ngOnInit(){
    this.products = this.productService.getProducts()
  }

}
