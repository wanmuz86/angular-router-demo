import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductApiDTO } from '../models/product-api-dto';


@Injectable({
  providedIn: 'root'
})
export class ProductApi {
  
  private productUrl = "https://fakestoreapi.com/products"

  constructor(private httpClient:HttpClient){

  }

  getAllProducts(){
    // Call the API url using get method
    // <> the return type is Array of ProductApiDTO
    return this.httpClient.get<ProductApiDTO[]>(this.productUrl)
  }

  // <> the return type is  ProductApiDTO
  getProductById(id:number){
    return this.httpClient.get<ProductApiDTO>(`${this.productUrl}/${id}`)
  }

  addProduct(title:string, price:number,description:string){
    const dataToServer = {
      "title":title,
      "price":price,
      "description":description,
      "category":"mock cat", //hardcode, add this form in create-page
      "image":"http://www.example.com" // hardcode, add this in create-page
    }

    return this.httpClient.post(this.productUrl,dataToServer)
    
  }
}
