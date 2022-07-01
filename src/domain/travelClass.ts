export enum EnumTravelClass {
  "ECONOMIC" = 1,
  "FIRST" = 2,
  "BUSINESS" = 5,
}

export class TravelClass {
  constructor(private _coefficient: number) {}

  public coefficient(): number {
    return this._coefficient;
  }
}
