// { amount: 10, type_: 'stamina'}
type EnergyType = 'mana' | 'stamina';

export default interface Energy {
  type_: EnergyType,
  amount: number
}

export { EnergyType };
