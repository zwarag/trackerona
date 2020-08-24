import {FederalData} from './federal-data';
import {RestFederalState} from './rest-federal-state';

export class FederalState extends FederalData {

  federalState: string;
  deaths: number;
  federalStateId: number;
  recovered: number;
  positive: number;
  positivePerResident: number;
  averageSevenDay: number;


  private constructor(objectId: number,
              infected: number,
              infectedPerResident: number,
              globalID: string,
              datum: number,
              increase: number,
              increasePercent: number,
              population: number,
              federalState: string,
              deaths: number,
              federalStateId: number,
              recovered: number,
              positive: number,
              positivePerResident: number,
              averageSevenDay: number) {
    super(objectId, infected, infectedPerResident, globalID, datum, increase, increasePercent, population);
    this.federalState = federalState;
    this.deaths = deaths;
    this.federalStateId = federalStateId;
    this.recovered = recovered;
    this.positive = positive;
    this.positivePerResident = positivePerResident;
    this.averageSevenDay = averageSevenDay;
  }

  public static generateFromRest(data: RestFederalState): FederalState {
    return new FederalState(data.OBJECTID, data.infizierte, data.infizierte_pro_ew, data.GlobalID, data.datum, data.zuwachs, data.zuwachs_prozent, data.einwohner, data.bundesland, data.verstorbene, data.bundeslandid, data.genesene, data.positiv, data.positiv_pro_ew, data.durchschnitt_sieben)
  }

}
