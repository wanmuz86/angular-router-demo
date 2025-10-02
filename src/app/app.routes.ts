import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { ProductDetail } from './product-detail/product-detail';
import { Cart } from './cart/cart';
import { PageNotFound } from './page-not-found/page-not-found';
import { CreateProduct } from './create-product/create-product';

export const routes: Routes = [
    {
        /// map the url to the component
        // eg: localhost:4200 will be mapped to ProductList Component
        path:'',component:ProductList,
    
    },
    {
         // eg: localhost:4200/products/1 will be mapped to ProductDetail Component
        path:'products/:id', component:ProductDetail,
    },
    {
        path:'cart', component:Cart
    },
    {
        path:'create-product', component:CreateProduct
    },
    {
        // Default page if it is not defined
        path:'**', component:PageNotFound
    }
];
