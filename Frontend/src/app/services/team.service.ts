import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    const myAPI = environment.url;
    this.apiUrl = myAPI + '/team';
  }

  getAll(): Observable<any> {
    const url = this.apiUrl;
    return this.http.get(url);
  }
}
