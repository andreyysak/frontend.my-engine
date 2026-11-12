import type { PowertrainType } from '../car'

export type LiquidFuel = 'diesel' | 'gasoline' | 'lpg'

export type ChargerType = 'ac' | 'dc'

export type FuelLogKind = 'refuel' | 'charge'

interface FuelLogBase {
  id: string
  carId: string
  date: string
  odometer: number
  totalCost: number
}

export interface RefuelLog extends FuelLogBase {
  kind: 'refuel'
  fuel: LiquidFuel
  liters: number
  pricePerLiter: number
  isFullTank: boolean
}

export interface ChargeLog extends FuelLogBase {
  kind: 'charge'
  kwh: number
  pricePerKwh: number
  chargerType?: ChargerType
  startPercent?: number
  endPercent?: number
}

export type FuelLog = RefuelLog | ChargeLog

export const POWERTRAIN_LOG_KINDS: Record<PowertrainType, FuelLogKind[]> = {
  diesel: ['refuel'],
  gasoline: ['refuel'],
  gasoline_lpg: ['refuel'],
  hybrid: ['refuel'],
  electric: ['charge'],
  phev: ['refuel', 'charge'],
}

export const POWERTRAIN_FUELS: Record<PowertrainType, LiquidFuel[]> = {
  diesel: ['diesel'],
  gasoline: ['gasoline'],
  gasoline_lpg: ['gasoline', 'lpg'],
  hybrid: ['gasoline'],
  electric: [],
  phev: ['gasoline'],
}
