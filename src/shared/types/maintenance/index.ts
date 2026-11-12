import type { CarType, PowertrainType } from '../car'

export type MaintenanceType =
  | 'oil_change'
  | 'oil_filter'
  | 'air_filter'
  | 'cabin_filter'
  | 'fuel_filter'
  | 'spark_plugs'
  | 'timing_belt'
  | 'coolant'
  | 'brake_pads'
  | 'brake_fluid'
  | 'transmission_oil'
  | 'tires'
  | 'battery_12v'
  | 'inspection'
  | 'hv_battery_check'
  | 'reducer_oil'
  | 'chain'
  | 'fork_oil'
  | 'tachograph'
  | 'air_dryer'
  | 'other'

export interface ServiceInterval {
  distance?: number
  months?: number
}

export interface MaintenanceItem {
  type: MaintenanceType
  cost?: number
  note?: string
}

export interface Maintenance {
  id: string
  carId: string
  date: string
  odometer: number
  items: MaintenanceItem[]
  totalCost?: number
  note?: string
}

export interface MaintenanceCatalogItem {
  type: MaintenanceType
  carTypes?: CarType[]
  powertrains?: PowertrainType[]
  defaultInterval: ServiceInterval
  defaultNotifyBefore: NotifyBefore
}

export interface NotifyBefore {
  distance?: number
  days?: number
}
