import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charting',
  templateUrl: './charting.component.html',
  styleUrls: ['./charting.component.css']
})
export class ChartingComponent implements OnInit {
  public chartType:string = 'line';
public chartDatasets : Array<any> =[
  {data : [8764.56,
    164.46,
    57.39,
    0.999434,
    0.222148,
    0.233855,
    329.8,
    3.71,
    0.053899], label: 'My First datasets'}
];
public chartLabels : Array<any> = ['Bitcoin',
'Etherium',
'Litecoin',
'Tether',
'Iota',
'XRP',
'Bitcoin Cash',
'Eos',
'Stellar '];
public chartColors: Array<any> = [
  {
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 2,
  }
];

public chartOptions: any = {
  responsive: true
};
public chartClicked(e: any): void { }
public chartHovered(e: any): void { }

  constructor() { }

  ngOnInit() {
  }


}
