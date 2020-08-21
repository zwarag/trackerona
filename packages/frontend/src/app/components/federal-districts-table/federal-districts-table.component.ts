import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {GenericTable} from '../../genericTable';
import {map} from 'rxjs/operators';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-federal-districts-table',
  templateUrl: './federal-districts-table.component.html',
  styleUrls: ['./federal-districts-table.component.scss']
})
export class FederalDistrictsTableComponent implements OnInit {

  federalDistrictsTable$: Observable<GenericTable>;

  constructor(
    private data: DataService
  ) { }

  ngOnInit(): void {
    this.federalDistrictsTable$ = this.data.getFederalDistricts().pipe(
      map(e => {
          const table: GenericTable = {
            title: 'Bezirke im Überblick',
            tableHeads: ['Bezirk', 'Zuwachs', 'Zuwachs in %'],
            tableRows: e.map(v => [
              v.PB,
              (v.zuwachs >= 0) ? '+' + v.zuwachs : v.zuwachs,
              (v.zuwachs >= 0) ? '+' + v.zuwachs_prozent.toFixed(2) : v.zuwachs_prozent.toFixed(2)
            ])
          };
          return table;
        }
      ));
  }

}
