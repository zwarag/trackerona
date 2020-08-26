/*
 * Copyright (c) 2000 - 2020 by Raiffeisen Software GmbH.
 * All rights reserved.
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FederalState } from '../../models/federal-state';
import { FederalDistrict } from '../../models/federal-district';
import { RestFederalState } from '../../models/rest-federal-state';
import { RestGenericResponse } from '../../models/rest-generic-response';
import { RestFederalDistrict } from '../../models/rest-federal-district';

@Injectable({
  providedIn: 'root',
})
export class RestService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getFederalStates(): Observable<FederalState[]> {
    const url = `https://services1.arcgis.com/YfxQKFk1MjjurGb5/ArcGIS/rest/services/AUSTRIA_COVID19_Cases/FeatureServer/3/query?where=datum >= CURRENT_TIMESTAMP -30&outFields=*&sqlFormat=none&f=pjson`;
    return this.http.get<RestGenericResponse>(url)
      .pipe(
        map((res) => res.features.map((x) => <RestFederalState>x.attributes).map((entry) => FederalState.generateFromRest(entry)))
      )
  }

  getFederalDistricts(): Observable<FederalDistrict[]> {
    const url = `https://services1.arcgis.com/YfxQKFk1MjjurGb5/ArcGIS/rest/services/AUSTRIA_COVID19_Cases/FeatureServer/4/query?where=datum >= CURRENT_TIMESTAMP -30&outFields=*&resultOffset=1&resultRecordCount=100&f=pjson`;
    return this.http.get<RestGenericResponse>(url)
      .pipe(
        map((res) => res.features.map((x) => <RestFederalDistrict>x.attributes).map((entry) => FederalDistrict.generateFromRest(entry))),
      );
  }

}
