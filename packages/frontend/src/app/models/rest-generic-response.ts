import {RestFederalState} from './rest-federal-state';
import {RestFederalDistrict} from './rest-federal-district';

type featureObject = {
  attributes: RestFederalState | RestFederalDistrict
}

export interface RestGenericResponse {
  objectIdFieldName: string;
  uniqueIdField: object;
  globalIdFieldName: object;
  serverGens: object;
  fields: object[];
  features: featureObject[]
}
