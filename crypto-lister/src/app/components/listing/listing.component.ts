import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
     
      public cryptos 
    constructor(private dataservice:DataService) { }
   
  ngOnInit(
  )  {
    this.dataservice.getData(10,1).subscribe(data =>(
      this.cryptos = data))
  }

}
