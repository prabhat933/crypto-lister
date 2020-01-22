import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _url2:string = "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1";
  private _url3:string = "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1";
  constructor(private http:HttpClient) { }
  
  getData(perPage =5 ,pageNumber = 1,orderBy= "market_cap_desc") {
    let _url:string = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=${orderBy}&per_page=${perPage}&page=${pageNumber}&sparkline=false`;
    return this.http.get(_url);
  }
  getCompareData(){
    return this.http.get(this._url2);
  }
  get24HourData(){
    return this.http.get(this._url3);
  }
}

