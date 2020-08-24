/*
 * Copyright (c) 2000 - 2020 by Raiffeisen Software GmbH.
 * All rights reserved.
 */

import { Component, OnInit } from '@angular/core';

import { DataStateService } from '../shared/services/data-state.service';
import { Observable } from 'rxjs';
import { Bezirk, GenericTable, Global } from '@lib/elements/table';
import { map, share, shareReplay } from 'rxjs/operators';

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
// @ts-ignore
export class TrackerComponent implements OnInit {

  stateDataSource$: Observable<GenericTable<Global, StateRow[]>>;
  districtDataSource$: Observable<GenericTable<Bezirk, DistrictRow[]>>;

  constructor(
    private data: DataStateService,
  ) {
  }

  ngOnInit() {
    // TODO: refactor to combineLatest, switchMap oder mergeMap, was auch immer der richtige operator ist
    // TODO: Difference between cold and hot observable lernen
    this.stateDataSource$ = this.data.federalStates$.pipe(
      map((e) => {
          return {
            title: 'Bundesländer im Überblick',
            tableHeads: ['Bundesland', 'Infizierte', 'Infizierte pro 100k Einwohner', 'Genesene', 'Verstorbene'],
            tableRows: e.map(v => [v.federalState, v.infected, v.infectedPerResident.toFixed(), v.recovered, v.deaths]),
          } as unknown as GenericTable<Global, StateRow[]>;
        },
      ),
      // shareReplay()
    );
    this.districtDataSource$ = this.data.federalDistricts$.pipe(
      map(e => {
          return {
            title: 'Bezirke im Überblick',
            tableHeads: ['Bezirk', 'Zuwachs', 'Zuwachs in %'],
            tableRows: e.map(v => [
              v.name,
              ( v.increase >= 0 ) ? '+' + v.increase : v.increase,
              ( v.increase >= 0 ) ? '+' + v.increasePercent.toFixed(2) : v.increasePercent.toFixed(2),
            ]),
          } as unknown as GenericTable<Bezirk, DistrictRow[]>;
        },
      ));

    // this.districtDataSource$.subscribe({
    //   next: r => console.log('tracker', r)
    // })
    // end todo
  }

}
