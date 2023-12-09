import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Product {
    id: number;
    code: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    inventoryStatus: string;
    category: string;
    image?: string;
    rating?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = "assets/products.json"

  constructor(private http: HttpClient) { }

  getProductList(){
    return this.http.get<any>(this.url);
  }

  createProduct(product){
    return this.http.post(this.url, product)
  }

  deleteProduct(id : string){
    return this.http.delete(this.url + '/' +id)
  }
  
}
