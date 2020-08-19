import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import { FederalState } from './federalState';
import {FederalDistrict} from './federalDistrict';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(
    private http: HttpClient,
  ) { }

  getFederalStates(): Observable<FederalState[]> {
    const url = `https://services1.arcgis.com/YfxQKFk1MjjurGb5/ArcGIS/rest/services/AUSTRIA_COVID19_Cases/FeatureServer/3/query?where=datum >= CURRENT_TIMESTAMP -30&outFields=*&sqlFormat=none&f=pjson`;
    return this.http.get<any>(url)
      .pipe(
        map(e => e.features.map(x => x.attributes)),
      );
  }

  getFederalDistricts(): Observable<FederalDistrict[]> {
    const url = `https://services1.arcgis.com/YfxQKFk1MjjurGb5/ArcGIS/rest/services/AUSTRIA_COVID19_Cases/FeatureServer/4/query?where=datum >= CURRENT_TIMESTAMP -30&outFields=*&resultOffset=1&resultRecordCount=100&f=pjson`;
    return this.http.get<any>(url)
      .pipe(
        map(e => e.features.map(x => x.attributes)),
      );
  }

}
