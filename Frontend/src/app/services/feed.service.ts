import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private apiUrl: string;
  public newPost = new Subject<any>();

  constructor(private http: HttpClient) {
    const myAPI = environment.url;
    this.apiUrl = myAPI + '/feed';
  }

  getAll(): Observable<any> {
    const url = this.apiUrl;
    return this.http.get(url);
  }

  post(publi){
    const url = this.apiUrl;
    return this.http.post(url, publi);
  }

  deletePost(id){
    const url = this.apiUrl + '/' + id;
    return this.http.delete(url);
  }

  
}
