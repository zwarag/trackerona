import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Bezirk, GenericTable, Global } from '@lib/elements/table';
import { map } from 'rxjs/operators';
import { CountryData } from "../models/country-data";
import { FederalStatesPieChart } from "../models/federal-states-pie-chart";
import { FederalStateService } from "../shared/services/federalState.service";
import { FederalDistrictService } from "../shared/services/federalDistrict.service";
import { CountryService } from "../shared/services/country.service";

export type Row = {
  bundesland: string,
  infizierte: number,
  infizierte_pro_ew: number,
  genesene: number,
  verstorbene: number,
  PB: string,
  zuwachs: number,
  zuwachs_prozent: number,
};

type StateRow = Pick<Row, 'bundesland' | 'infizierte' | 'infizierte_pro_ew' | 'genesene' | 'verstorbene'>
type DistrictRow = Pick<Row, 'PB' | 'zuwachs' | 'zuwachs_prozent'>

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styles: [],
})
export class TrackerComponent implements OnInit {

  stateDataSource$: Observable<GenericTable<Global, StateRow[]>>;
  districtDataSource$: Observable<GenericTable<Bezirk, DistrictRow[]>>;
  austriaDataSource$: Observable<CountryData>
  stateBarChartData: FederalStatesPieChart

  constructor(
    private federalStatesService: FederalStateService,
    private federalDistrictsService: FederalDistrictService,
    private countryService: CountryService
  ) {
  }

  ngOnInit() {
    this.stateDataSource$ = this.federalStatesService.latest$.pipe(
      map((e) => {
          return {
            title: 'Bundesländer im Überblick',
            tableHeads: ['Bundesland', 'Infizierte', 'Infizierte pro 100k Einwohner', 'Fälle', 'Fälle pro 100k Einwohner', 'Genesene', 'Verstorbene'],
            tableRows: e.map(v => [v.federalState, v.positive, v.positivePerResident.toFixed(), v.infected, v.infectedPerResident.toFixed(), v.recovered, v.deaths]),
          } as unknown as GenericTable<Global, StateRow[]>;
        },
      ),
    );
    this.districtDataSource$ = this.federalDistrictsService.latest$.pipe(
      map(e => {
          return {
            title: 'Bezirke im Überblick',
            tableHeads: ['Bezirk', 'Zuwachs', 'Zuwachs in %', 'Fälle insgesamt', 'Fälle insgesamt pro 100k Einwohner'],
            tableRows: e.map(v => [
              v.name,
              (v.increase >= 0) ? '+' + v.increase : v.increase,
              (v.increase >= 0) ? '+' + v.increasePercent.toFixed(2) : v.increasePercent.toFixed(2),
              v.infected,
              v.infectedPerResident.toFixed()
            ]),
          } as unknown as GenericTable<Bezirk, DistrictRow[]>;
        },
      )
    );
    this.austriaDataSource$ = this.countryService.data$
    this.stateBarChartData = this.federalStatesService.getInfectedForBarChart();
  }

}
