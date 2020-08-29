import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { TableModule } from '@lib/elements/table';
import { CardModule } from "@lib/elements/card";

import { DataTableComponent } from "./components/data-table/data-table.component";
import { CardCollectionComponent } from "./components/card-collection/card-collection.component";
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { LineChartComponent } from "./components/line-chart/bar-chart.component";
import { PieChartComponent } from "./components/pie-chart/bar-chart.component";

@NgModule({
  declarations: [
    DataTableComponent,
    CardCollectionComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent
  ],
  imports: [
    TableModule,
    CardModule,
    CommonModule,
    ChartsModule,
  ],
  exports: [DataTableComponent, CardCollectionComponent, BarChartComponent, LineChartComponent, PieChartComponent]
})

// @ts-ignore
export class SharedModule {
  constructor() {
  }
}
