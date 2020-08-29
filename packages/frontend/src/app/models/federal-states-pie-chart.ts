import { Label } from "ng2-charts";
import { ChartDataSets } from "chart.js";

export interface FederalStatesPieChart {
  labels: Label[]
  data: ChartDataSets[]
}
