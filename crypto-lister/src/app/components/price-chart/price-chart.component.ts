import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";

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
      this.times = data["prices"].map(x => new Date(x[0]).toLocaleString());
      console.log(this.prices);
      console.log(this.times);
      this.chartDatasets[0].data = this.prices;
      this.chartLabels = this.times;
      this.chartDatasets[0].label = "bitcoin";
    });
  }

  public chartType: string = "line";

  public chartDatasets: Array<any> = [{}];

  public chartLabels: Array<any> = [];

  public chartColors: Array<any> = [
    {
      backgroundColor: "rgba(105, 0, 132, .2)",
      borderColor: "rgba(200, 99, 132, .7)",
      borderWidth: 2
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void {}
  public chartHovered(e: any): void {}
}
