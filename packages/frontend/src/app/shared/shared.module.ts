import { NgModule } from '@angular/core';
import { DataTableComponent } from './components/data-table/data-table.component';
import { TableModule } from '@lib/elements/table';

@NgModule({
  declarations: [
    DataTableComponent
  ],
  imports: [
    TableModule
  ],
  exports: [DataTableComponent, TableModule]
})
// @ts-ignore

export class SharedModule {
  constructor() {
  }
}
