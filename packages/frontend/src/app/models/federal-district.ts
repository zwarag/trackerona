import { FederalData } from './federal-data';

export interface FederalDistrict extends FederalData {
  BKZ: number;
  PB: string;
  BL_KZ: number;
  BL: string;
  Shape_Length: number;
  Shape_Area: number;
}
