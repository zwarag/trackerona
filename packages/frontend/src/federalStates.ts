export interface FederalState {
  OBJECTID: number;
  bundesland: string;
  datum: number;
  infizierte: number;
  zuwachs: number;
  zuwachs_prozent: number;
  infizierte_pro_ew: number;
  verstorbene: number;
  einwohner: number;
  bundeslandid: number;
  genesene: number;
  positiv: number;
  positiv_pro_ew: number;
  GlobalID: string;
  durchschnitt_sieben: number;
  r_eff: null;
  r_eff_lwr: null;
  r_eff_upr: null;
}
