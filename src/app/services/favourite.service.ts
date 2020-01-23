import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class FavouriteService {
  private favorites = [];
  constructor() {
    if (localStorage.getItem("favorites") == null) {
      localStorage.setItem("favorites", "[]");
    }
    this.favorites = JSON.parse(localStorage.getItem("favorites"));
  }

  getFavorites() {
    return this.favorites;
  }

  isFavorite(item) {
    let present = false;
    this.favorites.forEach(x => {
      if (item == x) {
        present = true;
      }
    });
    return present;
  }

  addToFavorites(item) {
    let present = this.isFavorite(item);
    if (present == false) {
      this.favorites.push(item);
      localStorage.setItem("favorites", JSON.stringify(this.favorites));
    }
  }
}
