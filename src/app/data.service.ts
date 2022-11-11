import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  order = [];
  checkbuild: any = {
    name: String,
    topping: [],
    price : 0
  };
  obs = new BehaviorSubject([]);
  constructor(private http: HttpClient) { }

  getmenu(): Observable<any>{
    return this.http.get('http://localhost:6900/menu');
  }
  getbuild(): Observable<any>{
    return this.http.get('http://localhost:6900/build');
  }
  menuitem(): any{
   return this.order;
  }
}
