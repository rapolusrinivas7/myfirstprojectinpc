import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { }
  states(){
    return this._http.get("http://localhost:3000/states");
  };
  cities(){
    return this._http.get("http://localhost:3000/city");
  }
}
