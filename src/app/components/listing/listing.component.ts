import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-listing",
  templateUrl: "./listing.component.html",
  styleUrls: ["./listing.component.css"]
})
export class ListingComponent implements OnInit {
  public cryptos;
  public pageNumber = 1;
  public perPage = 10;
  public orderBy = "market_cap_desc";

  constructor(private dataservice: DataService) {}

  fetchNextPage() {
    this.pageNumber++;
    this.getListingData();
  }

  fetchPreviousPage() {
    this.pageNumber--;
    this.getListingData();
  }

  ngOnInit() {
    this.getListingData();
  }

  getListingData() {
    this.dataservice
      .getData(this.perPage, this.pageNumber, this.orderBy)
      .subscribe(data => {
        this.cryptos = data;
        this.cryptos.map(x => (x["selected"] = false));
      });
  }

  markAsFavorite() {
    alert("Marked as favorite");
  }
}
