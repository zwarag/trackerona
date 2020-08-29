import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js'
import { Label } from 'ng2-charts'

@Component({
  selector: 'app-bar-chart',
  template: `
    <div style="display:block;">
      <ng-container *ngIf="chartData">
        <canvas baseChart
                [datasets]="chartData"
                [labels]="chartLabels"
                [options]="barChartOptions"
                [plugins]="barChartPlugins"
                [legend]="barChartLegend"
                [chartType]="barChartType">
        </canvas>
      </ng-container>
    </div>
  `
})
export class BarChartComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  // public chartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  @Input() chartLabels: Label[];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  // public chartData: ChartDataSets[] = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  // ];
  @Input() chartData: ChartDataSets[]


  constructor() {
  }

  ngOnInit(): void {
  }

}
