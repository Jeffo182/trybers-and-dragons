import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static _incrementRangerCount = 0;
  private _energyType: EnergyType;
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._incrementRangerCount += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger._incrementRangerCount;
  }
}

export default Ranger;
