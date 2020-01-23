import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-charting",
  templateUrl: "./charting.component.html",
  styleUrls: ["./charting.component.css"]
})
export class ChartingComponent implements OnInit {
  constructor(private dataservice: DataService) {}

  public cryptoName1 = "bitcoin";
  public prices1;
  public times1;

  public cryptoName2 = "ethereum";
  public prices2;
  public times2;

  ngOnInit() {
    this.dataservice.getCompareData().subscribe(data => {
      this.prices1 = data[0]["prices"].map(x => x[1]);
      this.prices2 = data[1]["prices"].map(x => x[1]);
      this.times1 = data[0]["prices"].map(x => new Date(x[0]).toLocaleString());
      this.times2 = data[1]["prices"].map(x => new Date(x[0]).toLocaleString());

      this.chartDatasets[0].data = this.prices1;
      this.chartDatasets[1].data = this.prices2;
      this.chartLabels = this.times1;

      this.chartDatasets[0].label = this.cryptoName1;
      this.chartDatasets[1].label = this.cryptoName2;
      console.log(data);
    });
  }

  public chartType: string = "line";

  public chartDatasets: Array<any> = [{}, {}];

  public chartLabels: Array<any> = [];

  public chartColors: Array<any> = [
    {
      backgroundColor: "rgba(105, 0, 132, .2)",
      borderColor: "rgba(200, 99, 132, .7)",
      borderWidth: 2
    },
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
