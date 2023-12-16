import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  // url:any='https://pokeapi.co/api/v2/'
  constructor( private http:HttpClient) { }

  get(url:any):Observable<any>{
    return this.http.get<any>(url);
  }
}
