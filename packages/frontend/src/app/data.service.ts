import { Injectable } from '@angular/core';
import {RestService} from './rest.service';
import {Observable} from 'rxjs';
import {FederalState} from './federalState';
import {FederalDistrict} from './federalDistrict';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  federalStates$: Observable<FederalState[]>;
  federalDistricts$: Observable<FederalDistrict[]>;

  constructor(
    private rest: RestService
  ) {
    this.federalStates$ = this.rest.getFederalStates();
    this.federalDistricts$ = this.rest.getFederalDistricts();
  }

  getFederalStates(): Observable<FederalState[]> {
    return this.federalStates$;
  }

  getFederalDistricts(): Observable<FederalDistrict[]> {
    return this.federalDistricts$;
  }

}
