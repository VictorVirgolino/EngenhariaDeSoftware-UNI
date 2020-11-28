import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmitterService {

  public emissor = new Subject<any>();

  constructor() { }

  myValues(values: Array<any>){
    this.emissor.next(values);
  }

  getValues(){
    return this.emissor.asObservable();
  }
}
