import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _incrementDwarf = 0;
  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.incrementDwarfCount();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf._incrementDwarf;
  }
  
  static incrementDwarfCount(): void {
    Dwarf._incrementDwarf += 1;
  }
}

export default Dwarf;