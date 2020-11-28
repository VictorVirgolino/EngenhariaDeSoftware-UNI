import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {User} from '../models/User'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    const myAPI = environment.url;
    this.apiUrl = myAPI + '/profile';
  }

  get(){
    const url = this.apiUrl;
    return this.http.get<User>(url);
  }
}
