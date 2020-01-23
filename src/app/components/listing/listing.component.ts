import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { FavouriteService } from "src/app/services/favourite.service";

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

  constructor(
    private dataservice: DataService,
    private favoriteservice: FavouriteService
  ) {}

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
    if (this.getSelectedCount() == 0) {
      alert("Please selected atleast one cryptocurrency");
    } else {
      alert("Marked as favorite");
      this.cryptos.forEach(x => {
        if (x["selected"] == true) {
          this.favoriteservice.addToFavorites(x["id"]);
        }
        x["selected"] = false;
      });
    }
  }

  isFavorite(cryptoName) {
    return this.favoriteservice.isFavorite(cryptoName);
  }

  getSelectedCount() {
    let count = 0;
    this.cryptos.forEach(x => {
      if (x["selected"] == true) {
        count++;
      }
    });
    return count;
  }
}
