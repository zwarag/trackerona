import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js'
import { Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet } from 'ng2-charts'

@Component({
  selector: 'app-pie-chart',
  template: `
    <div style="display: block;">
      <canvas baseChart
              [data]="pieChartData"
              [labels]="pieChartLabels"
              [chartType]="pieChartType"
              [options]="pieChartOptions"
              [plugins]="pieChartPlugins"
              [legend]="pieChartLegend">
      </canvas>
    </div>
  `
})
export class PieChartComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
  }

}
