import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//import { HTTP } from '@ionic-native/http/ngx';
import { Smarthouse } from '../smarthouse';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api = 'http://localhost:3000/';
  constructor( private http: HttpClient) {  console.log('hi!') }

  getAll(){
    const path = this.api+("focos");
    return this.http.get<Smarthouse[]>(path);
  }
  updateTask(smarthouse: Smarthouse){
    const path = `${this.api}focos/${smarthouse.id}`;
    return this.http.put<Smarthouse>(path, smarthouse);
    
  }

  /*updateFoco(estado: string){
    const path = this.api+"focos/";
    return this.http.put(path, estado);
  }

  get1(){
    const path = this.api+("focos/1?estado=0");
    return this.http.get(path);
    }

  get2(){
    const path = this.api+("focos/2?estado=0");
    return this.http.get(path);
  }
  get3(){
    const path = this.api+("focos/3");
    return this.http.get(path);
  }*/



}
