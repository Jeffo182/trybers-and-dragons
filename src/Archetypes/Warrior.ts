import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static _incrementWarriorCount = 0;
  private _energyType: EnergyType;
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._incrementWarriorCount += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior._incrementWarriorCount;
  }
}

export default Warrior;
