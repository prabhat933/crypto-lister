import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { FavouriteService } from "src/app/services/favourite.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-listing",
  templateUrl: "./listing.component.html",
  styleUrls: ["./listing.component.css"]
})
export class ListingComponent implements OnInit {
  public cryptos;
  public pageNumber = 1;
  public perPage = 10;
  public showOnlyFavorites = true;
  public orderBy = "market_cap_desc";

  constructor(
    private dataservice: DataService,
    private favoriteservice: FavouriteService,
    private router: Router
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
    let ids = "";
    if (this.showOnlyFavorites) {
      ids = this.favoriteservice.getFavorites().join(",");
      this.pageNumber = 1;
    }
    this.dataservice
      .getData(ids, this.perPage, this.pageNumber, this.orderBy)
      .subscribe(data => {
        this.cryptos = data;
        this.cryptos.map(x => (x["selected"] = false));
      });
  }

  markAsFavorite() {
    if (this.getSelectedCount() == 0) {
      alert("Please selected atleast one cryptocurrency");
    } else {
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

  goToComparePage() {
    let crypto = [{}, {}],
      i = 0;
    this.cryptos.forEach(x => {
      if (x.selected) {
        crypto[i]["id"] = x.id;
        crypto[i]["name"] = x.name;
        i++;
      }
    });
    let params = {
      id1: crypto[0]["id"],
      name1: crypto[0]["name"],
      id2: crypto[1]["id"],
      name2: crypto[1]["name"]
    };
    this.router.navigate(["comparechart", params]);
  }

  applySorting(criteria) {
    if (criteria == "market_cap") {
      if (this.orderBy == "market_cap_desc") {
        this.orderBy = "market_cap_asc";
      } else {
        this.orderBy = "market_cap_desc";
      }
    } else if (criteria == "price") {
      if (this.orderBy == "price_desc") {
        this.orderBy = "price_asc";
      } else {
        this.orderBy = "price_desc";
      }
    }
    this.getListingData();
  }
}
