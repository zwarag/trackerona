export type Bundesland = ['Bundesland', 'Infizierte', 'Infizierte pro 100k Einwohner', 'Genesene', 'Verstorbene'];
export type Bezirk = ['Bezirk', 'Zuwachs', 'Zuwachs in %'];
export type Global = Bundesland & Bezirk;

export interface GenericTable<T1 = Global, T2 = unknown[]> {
  title: string;
  tableHeads: T1;
  tableRows: T2;
}
