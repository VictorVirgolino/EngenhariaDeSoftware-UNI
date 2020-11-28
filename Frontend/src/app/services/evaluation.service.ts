import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Teacher } from '../models/Teacher';

@Injectable({
  providedIn: 'root',
})
export class EvaluationService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    const myAPI = environment.url;
    this.apiUrl = myAPI + '/evaluation';
  }

  getAll(name) {
    const url = this.apiUrl + '?q=' + name;
    return this.http.get(url);
  }
  getById(id) {
    const url = this.apiUrl + '/' + id;
    return this.http.get(url, id);
  }
}
