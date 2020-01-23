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
  public prices;
  public times;
  ngOnInit() {
    this.dataservice.get24HourData(this.cryptoName).subscribe(data => {
      this.prices = data["prices"].map(x => x[1]);
      this.times = data["prices"].map(x => new Date(x[0]).toString());
      console.log(this.prices);
      console.log(this.times);
    });
  }

  public chartType: string = "line";

  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "My First dataset" },
    { data: [28, 48, 40, 19, 86, 27, 90], label: "My Second dataset" }
  ];

  public chartLabels: Array<any> = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July"
  ];

  public chartColors: Array<any> = [
    {
      backgroundColor: "rgba(105, 0, 132, .2)",
      borderColor: "rgba(200, 99, 132, .7)",
      borderWidth: 2
    },
    {
      backgroundColor: "rgba(0, 137, 132, .2)",
      borderColor: "rgba(0, 10, 130, .7)",
      borderWidth: 2
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void {}
  public chartHovered(e: any): void {}
}
