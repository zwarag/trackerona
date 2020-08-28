import { NgModule } from '@angular/core';
import { DataTableComponent } from './components/data-table.component';
import { TableModule } from '@lib/elements/table';
import { CardModule } from "@lib/elements/card";

@NgModule({
  declarations: [
    DataTableComponent,
  ],
  imports: [
    TableModule,
    CardModule
  ],
  exports: [DataTableComponent, TableModule, CardModule]
})

// @ts-ignore
export class SharedModule {
  constructor() {
  }
}
