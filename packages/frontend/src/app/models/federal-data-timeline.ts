import { FederalData } from "./federal-data";

type UnixTime = number;

export class FederalDataTimeline<T extends FederalData> {

  timeline: Map<UnixTime, T[]>

  constructor() {
    this.timeline = new Map();
  }

  private convertDate(uTime: UnixTime): number {
    let tmp = new Date(uTime);
    return new Date(`${ tmp.getFullYear() }.${ tmp.getMonth() + 1 }.${ tmp.getDate() }`).getTime();
  }

  addEntry(entry: T): void {
    let date = this.convertDate(entry.datum);
    if (!this.timeline.has(date)) {
      this.timeline.set(date, [] as T[])
    }
    let tmp = this.timeline.get(date)
    tmp.push(entry)
  }

  getLatest(): T[] {
    let tmp = new Date();
    let date = new Date(`${ tmp.getFullYear() }.${ tmp.getMonth() + 1 }.${ tmp.getDate() }`).getTime()
    return this.timeline.has(date) ? this.timeline.get(date) : [];
  }

}
