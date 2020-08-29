export class CountryData {
  country: string;
  deaths: number;
  recovered: number;
  positive: number;
  positivePerResident: number;

  constructor(country: string = "", deaths: number = 0, recovered: number = 0, positive: number = 0, positivePerResident: number = 0) {
    this.country = country;
    this.deaths = deaths;
    this.recovered = recovered;
    this.positive = positive;
    this.positivePerResident = positivePerResident;
  }
}
