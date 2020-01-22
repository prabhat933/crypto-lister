import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
     
    public cryptos 
    public pageNumber
    public perPage
    public orderBy
    
    constructor(private dataservice:DataService) { }
    
    fetchNextPage() {
      console.log("Hello World");
    }

    fetchPreviousPage()  {
      console.log("Hello World");
    }
    

    ngOnInit(
  )  {
    this.dataservice.getData(5000,1).subscribe(data =>(
    this.cryptos = data))
  }
  
  
}
