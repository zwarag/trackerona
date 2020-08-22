import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GenericTable, Global } from './data-source.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class SimpleTableComponent implements OnInit{

  @Input() tableData$: Observable<GenericTable<unknown, unknown>>;

ngOnInit(): void {
  // this.tableData$?.subscribe({
  //   next:r => console.log('lib', r)
  // })
}
}
