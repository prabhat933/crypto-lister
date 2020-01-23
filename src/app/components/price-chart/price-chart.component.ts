import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-price-chart",
  templateUrl: "./price-chart.component.html",
  styleUrls: ["./price-chart.component.css"]
})
export class PriceChartComponent implements OnInit {
  public cryptoId;
  public cryptoName;
  public prices;
  public times;
  constructor(
    private dataservice: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.cryptoId = this.route.snapshot.paramMap.get("id");
    this.cryptoName = this.route.snapshot.paramMap.get("name");
    this.dataservice.get24HourData(this.cryptoId).subscribe(data => {
      this.prices = data["prices"].map(x => x[1]);
      this.times = data["prices"].map(x => new Date(x[0]).toLocaleString());
      this.chartDatasets[0].data = this.prices;
      this.chartLabels = this.times;
      this.chartDatasets[0].label = this.cryptoName;
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
