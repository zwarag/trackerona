export abstract class FederalData {
  objectId: number;
  infected: number;
  infectedPerResident: number;
  globalID: string;
  datum: number;
  increase: number;
  increasePercent: number;
  population: number;


  protected constructor(objectId: number,
                        infected: number,
                        infectedPerResident: number,
                        globalID: string,
                        datum: number,
                        increase: number,
                        increasePercent: number,
                        population: number) {
    this.objectId = objectId;
    this.infected = infected;
    this.infectedPerResident = infectedPerResident;
    this.globalID = globalID;
    this.datum = datum;
    this.increase = increase;
    this.increasePercent = increasePercent;
    this.population = population;
  }
}
