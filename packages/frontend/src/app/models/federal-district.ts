import {FederalData} from './federal-data';
import {RestFederalDistrict} from './rest-federal-district';

export class FederalDistrict extends FederalData {

  federalDistrictId: number;
  name: string;

  constructor(objectId: number,
              infected: number,
              infectedPerResident: number,
              globalID: string,
              datum: number,
              increase: number,
              increasePercent: number,
              population: number,
              federalDistrictId: number,
              name: string) {
    super(objectId, infected, infectedPerResident, globalID, datum, increase, increasePercent, population);
    this.federalDistrictId = federalDistrictId;
    this.name = name;
  }

  static generateFromRest(data: RestFederalDistrict): FederalDistrict {
    return new FederalDistrict(data.OBJECTID, data.infizierte, data.infizierte_pro_ew, data.GlobalID, data.datum, data.zuwachs, data.zuwachs_prozent, data.einwohner, data.BKZ, data.PB)
  }
}
