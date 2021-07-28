import { User } from './../model/user';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.apiBaseUrl;

  islogin = false;
  admin = false;
  suser=false;
  choixmenu:string = 'A';
  listData:User[]=[];

  constructor(private http:HttpClient ) { }

  login(username: string , pwd:string){
    return this.http.get(`${this.baseUrl}/auth/${username}`);
  }

  getData(id:number){
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createData(user:User):Observable<Object>{
    return this.http.post(`${this.baseUrl}/user/add`,user);
  }

  updateData(id:number , value:any):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,value);
  }

  deleteData(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'});
  }

  getAll():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
  

}
