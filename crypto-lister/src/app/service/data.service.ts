import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _url:string = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false  ";
  private _url2:string = "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1";
  private _url3:string = "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1";
  constructor(private http:HttpClient) { }
  
  getData() {
    return this.http.get(this._url);
  }
  getComparedata(){
    return this.http.get(this._url2);
  }
  get24HourData(){
    return this.http.get(this._url3);
  }
}

