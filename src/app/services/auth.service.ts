import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }
login(data:any): Observable<any>{
  return this._http.post("http://localhost:8000/auth/login", data);
}
register(data:any): Observable<any>{
  return this._http.post("http://localhost:8000/auth/register", data);
}

  
}
