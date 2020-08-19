import {FederalData} from './federalData';
export interface FederalState extends FederalData {
  bundesland: string;
  verstorbene: number;
  bundeslandid: number;
  genesene: number;
  positiv: number;
  positiv_pro_ew: number;
  durchschnitt_sieben: number;
  r_eff: null;
  r_eff_lwr: null;
  r_eff_upr: null;
}
