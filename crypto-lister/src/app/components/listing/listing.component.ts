import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
     
      public cryptos = [
        {
          "list_id ": "1",
          "currency_name": "Bitcoin",
          "price": "8764.56",
          "market_cap":"159185703078"
        },
        {
          "list_id ": "2",
          "currency_name": "Etherium",
          "price": "164.46",
          "market_cap":"17973959891"
        },
        {
          "list_id ": "3",
          "currency_name": "Litecoin",
          "price": "57.39",
          "market_cap":"3665462926"
        },
        {
          "list_id ": "4",
          "currency_name": "Tether",
          "price": "0.999434",
          "market_cap":"4630402187"
        },
        {
          "list_id ": "5",
          "currency_name": "Iota",
          "price": "0.222148",
          "market_cap":"617468232"
        },
        {
          "list_id ": "6",
          "currency_name": "XRP",
          "price": "0.233855",
          "market_cap":"10208672134"
        },
        {
          "list_id ": "7",
          "currency_name": "Bitcoin Cash",
          "price": "329.8",
          "market_cap":"6010578194"
        },
        {
          "list_id ": "8",
          "currency_name": "Eos",
          "price": "3.71",
          "market_cap":"3518044873"
        },
        {
          "list_id ": "9",
          "currency_name": "Steller",
          "price": "0.053899",
          "market_cap":"1077371771"
        },
      ]
    
  constructor() { }
   
  ngOnInit() {
  }

}
