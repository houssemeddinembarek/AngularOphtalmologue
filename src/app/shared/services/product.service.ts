import { Product } from './../model/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiUrl}/product/all`);
  }

  public addProduct( product:Product):Observable<Product>{
    return this.http.post<Product>(`${this.apiUrl}/product/add`,product);
  }

  public updateProduct(product:Product):Observable<Product>{
    return this.http.put<Product>(`${this.apiUrl}/product/update`,product);
  }

  public deleteProduct(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/product/delete/${id}`);
  }

  public getProduct(id:any):Observable<Product>{
    return this.http.get<Product>(`${this.apiUrl}/product/`+id);
  }


}
