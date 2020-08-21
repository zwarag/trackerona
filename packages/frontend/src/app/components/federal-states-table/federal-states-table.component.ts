import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {GenericTable} from '../../genericTable';
import {DataService} from '../../data.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-federal-states-table',
  templateUrl: './federal-states-table.component.html',
  styleUrls: ['./federal-states-table.component.scss']
})
export class FederalStatesTableComponent implements OnInit {

  bundeslandTable$: Observable<GenericTable>;

  constructor(
    private data: DataService
  ) { }

  ngOnInit(): void {
    this.bundeslandTable$ = this.data.getFederalStates().pipe(
      map(e => {
          const table: GenericTable = {
            title: 'Bundesländer im Überblick',
            tableHeads: ['Bundesland', 'Infizierte', 'Infizierte pro 100k Einwohner', 'Genesene', 'Verstorbene'],
            tableRows: e.map(v => [v.bundesland, v.infizierte, v.infizierte_pro_ew.toFixed(), v.genesene, v.verstorbene])
          };
          return table;
        }
      ));
  }

}
