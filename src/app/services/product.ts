import { Injectable } from '@angular/core';
import { ProductDao } from '../models/product-dao';

@Injectable({
  providedIn: 'root'
})
export class Product {
  products:ProductDao[] = [
    {
      id:1,
      name:"iPhone 17 Pro 256GB",
      price:6999
    },
    {
      id:2,
      name:"iPhone 17 Pro 512GB",
      price:7999
    },
    {
      id:3,
      name:"Xiaomi 15",
      price:5999
    }
  ]

  getProducts(){
      return this.products;
  }

  addProduct(product:ProductDao){
    // to fix bug if the product is empty (user delete all items, we set id to 1)
    const currentId = this.products.length === 0 ? 1 : this.products[
      this.products.length-1].id+1
    this.products = [...this.products, {...product, id:currentId}];
  }

  removeProduct(id:number){
    this.products = this.products.filter(val=> val.id !== id);
  }

  getProductById(id:number){
    // similar to filter, but will only return 1 result
    return this.products.find(val=> val.id === id);
  }
}
