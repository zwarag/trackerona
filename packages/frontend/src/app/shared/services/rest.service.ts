import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { FederalState } from '../../models/federal-state';
import { FederalDistrict } from '../../models/federal-district';
import { RestFederalState } from '../../models/rest-federal-state';
import { RestGenericResponse } from '../../models/rest-generic-response';
import { RestFederalDistrict } from '../../models/rest-federal-district';
import { FederalDataTimeline } from "../../models/federal-data-timeline";

@Injectable({
  providedIn: 'root',
})
export class RestService {

  constructor(
    private http: HttpClient,
  ) {
  }

  async getFederalStatesTimeLine(): Promise<FederalDataTimeline<FederalState>> {
    let retVal = new FederalDataTimeline<FederalState>();
    const url = `https://services1.arcgis.com/YfxQKFk1MjjurGb5/ArcGIS/rest/services/AUSTRIA_COVID19_Cases/FeatureServer/3/query?where=datum >= CURRENT_TIMESTAMP -30&outFields=*&sqlFormat=none&f=pjson`;
    await this.http.get<RestGenericResponse>(url)
      .pipe(
        map(
          (res) => res.features.map(
            (x) => <RestFederalState>x.attributes).map(
            (entry) => {
              retVal.addEntry(FederalState.generateFromRest(entry));
            }
          )
        ),
        catchError(this.handleError<RestGenericResponse>('GET States'))
      ).toPromise()
    return retVal;
  }

  async getFederalDistrictsTimeLine(): Promise<FederalDataTimeline<FederalDistrict>> {
    let retVal = new FederalDataTimeline<FederalDistrict>()
    const url = `https://services1.arcgis.com/YfxQKFk1MjjurGb5/ArcGIS/rest/services/AUSTRIA_COVID19_Cases/FeatureServer/4/query?where=datum >= CURRENT_TIMESTAMP -15&outFields=*&resultOffset=0&resultRecordCount=10000&f=pjson`;
    await this.http.get<RestGenericResponse>(url)
      .pipe(
        map(
          (res) => res.features.map(
            (x) => <RestFederalDistrict>x.attributes).map(
            (entry) => {
              retVal.addEntry(FederalDistrict.generateFromRest(entry))
            }
          )
        ),
        catchError(this.handleError<RestGenericResponse>('GET Districts'))
      ).toPromise();
    return retVal;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(`${ operation } failed: ${ error.message }`);

      return of(result as T);
    }
  }
}
