import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { forkJoin } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}
  getData(ids = "", perPage = 5, pageNumber = 1, orderBy = "market_cap_desc") {
    let _url: string = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}&order=${orderBy}&per_page=${perPage}&page=${pageNumber}&sparkline=false`;
    return this.http.get(_url);
  }

  getCompareData(cryptoName1 = "bitcoin", cryptoName2 = "ethereum") {
    let _url1: string = `https://api.coingecko.com/api/v3/coins/${cryptoName1}/market_chart?vs_currency=usd&days=1`;
    let _url2: string = `https://api.coingecko.com/api/v3/coins/${cryptoName2}/market_chart?vs_currency=usd&days=1`;
    return forkJoin(this.http.get(_url1), this.http.get(_url2));
  }

  get24HourData(cryptoName = "bitcoin") {
    let _url3: string = `https://api.coingecko.com/api/v3/coins/${cryptoName}/market_chart?vs_currency=usd&days=1`;

    return this.http.get(_url3);
  }
}
