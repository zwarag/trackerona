import { NgModule } from '@angular/core';
import { TableModule } from '@lib/elements/table';
import { CardModule } from "@lib/elements/card";
import { DataTableComponent } from "./components/data-table/data-table.component";
import { CardCollectionComponent } from "./components/card-collection/card-collection.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    DataTableComponent,
    CardCollectionComponent
  ],
  imports: [
    TableModule,
    CardModule,
    CommonModule
  ],
  exports: [DataTableComponent, CardCollectionComponent]
})

// @ts-ignore
export class SharedModule {
  constructor() {
  }
}
