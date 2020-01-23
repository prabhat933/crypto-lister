import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/service/data.service";

@Component({
  selector: "app-price-chart",
  templateUrl: "./price-chart.component.html",
  styleUrls: ["./price-chart.component.css"]
})
export class PriceChartComponent implements OnInit {
  constructor(private dataservice: DataService) {}

  public cryptoName = "bitcoin";
  ngOnInit() {
    this.dataservice
      .get24HourData(this.cryptoName)
      .subscribe(data => console.log(data));
  }
}
