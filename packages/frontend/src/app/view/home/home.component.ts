import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {DataService} from '../../data.service';
import {CountryData} from '../../countryData';
import {FederalState} from '../../federalState';
import {map} from 'rxjs/operators';
import {GenericTable} from '../../genericTable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  austriaData$: Observable<CountryData>;
  federalStates$: Observable<FederalState[]>;
  bundeslandTable$: Observable<GenericTable>;

  constructor(
    private data: DataService
  ) {

  }

  ngOnInit(): void {
    this.austriaData$ = this.data.countryData$;
    this.federalStates$ = this.data.federalStates$;
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
