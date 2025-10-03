import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductApi } from '../services/product-api';
@Component({
  selector: 'app-create-product',
  imports: [FormsModule],
  templateUrl: './create-product.html',
  styleUrl: './create-product.css'
})
export class CreateProduct {

  title:string = ""
  description:string = ""
  price:number = 0

  constructor (private productApiService:ProductApi){

  }


  addProductPressed(){
    
    this.productApiService.addProduct(
      this.title,this.price, this.description
    ).subscribe(
      {
        next:(data)=>{
          console.log(data);
          alert("Should be ok, check the status (201) on console")
        } ,
        error:(error)=> console.log(error)
      }
    )
  }

}
