import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Observable } from 'rxjs';
import { GenericTable } from '@lib/elements/table';

@Component({
  selector: 'app-data-table',
  template: `
    <lib-simple-table [tableData$]="dataSource$"></lib-simple-table>`,
  exportAs: 'appDataTable',
  changeDetection: ChangeDetectionStrategy.OnPush
})
// @ts-ignore
export class DataTableComponent {
  @Input() dataSource$: Observable<GenericTable<unknown, unknown>>;
  // ngOnInit(): void {
  // this.dataSource$.subscribe({
  //   next: res => console.log('shared',res)
  // })
  // }
}
