import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _url:string = "https://www.coingecko.com/api/documentations/v3#/coins/get_coins_markets";
  constructor(private http:HttpClient) { }
  
  getData() {
    return this.http.get(this._url);
  }
}

