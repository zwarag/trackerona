import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { GenericTable } from '@lib/elements/table';

@Component({
  selector: 'app-data-table',
  template: `
    <lib-simple-table
      [title]="_title"
      [tableHeads]="_tableHeads"
      [tableRows]="_tableRows">
    </lib-simple-table>`,
  exportAs: 'appDataTable',
  changeDetection: ChangeDetectionStrategy.Default
})

// @ts-ignore
export class DataTableComponent implements OnInit {
  @Input() dataSource$: Observable<GenericTable<unknown, unknown>>;
  _title: string
  _tableHeads: unknown
  _tableRows: unknown

  ngOnInit(): void {
    this.dataSource$.subscribe({
      next: res => {
        this._title = res.title
        this._tableHeads = res.tableHeads
        this._tableRows = res.tableRows
      }
    })
  }
}
