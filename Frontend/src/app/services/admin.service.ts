import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiURL: string;
  public newTeacherSubject = new Subject<any>();

  constructor(private http: HttpClient) {
    const myAPI = environment.url;
    this.apiURL = myAPI + '/admin';
   }

   add(teacher){
    const url = this.apiURL;
    return this.http.post(url, teacher);
   }

   getAll(): Observable<any> {
     const url = this.apiURL;
     return this.http.get(url);
   }

   deleteById(id){
    const url = this.apiURL + "/" + id;
    return this.http.delete(url);
   }
}