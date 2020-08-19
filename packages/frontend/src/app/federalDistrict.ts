import {FederalData} from './federalData';
export interface FederalDistrict  extends FederalData {
  BKZ: number;
  wPB: string;
  BL_KZ: number;
  BL: string;
  Shape_Length: number;
  Shape_Area: number;
}
