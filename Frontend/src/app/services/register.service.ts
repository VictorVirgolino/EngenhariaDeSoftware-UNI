import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {User} from '../models/User'
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl: string;

  constructor(private http: HttpClient) { 
    const myAPI = environment.url;
    this.apiUrl = myAPI + '/register';
  }

  registerUser(user: User){
    const url = this.apiUrl + '/';
    return this.http.post<User>(url, user);
  }

  deleteUser(id){
    const url = this.apiUrl + '/' + id;
    return this.http.post(url, id);
  }
}
