import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { CountryData } from "../../models/country-data";
import { FederalStateService } from "./federalState.service";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class CountryService {

  private dataSubject = new BehaviorSubject(new CountryData());
  data$: Observable<CountryData> = this.dataSubject

  constructor(
    private federalStateService: FederalStateService
  ) {
    this.computeCountryData();
  }

  private computeCountryData(): void {
    this.federalStateService.latest$.pipe(
      map((x) => {
        const austria: CountryData = {
          country: 'Österreich',
          recovered: x.map(e => e?.recovered).reduce((acc, val) => acc += val, 0),
          positive: x.map(e => e?.positive).reduce((acc, val) => acc += val, 0),
          positivePerResident: x.map(e => e?.positivePerResident).reduce((acc, val) => acc += val, 0),
          deaths: x.map(e => e?.deaths).reduce((acc, val) => acc += val, 0),
        };
        return austria;
      }),
    ).subscribe(value => this.dataSubject.next(value));
  }

}
