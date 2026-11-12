export type CarType = 'car' | 'motorcycle' | 'truck'

export type PowertrainType = 'diesel' | 'gasoline' | 'gasoline_lpg' | 'electric' | 'hybrid' | 'phev'

export type GearboxType = 'manual' | 'automatic' | 'robot' | 'cvt'

export type DriveType = 'fwd' | 'rwd' | 'awd'

export interface CarEngine {
  powertrain: PowertrainType
  volume?: number
  power?: number
}

export interface CarTransmission {
  gearbox: GearboxType
  drive: DriveType
}

export interface CarDimensions {
  length?: number
  width?: number
  height?: number
  weight?: number
}

export interface Car {
  id: string
  type: CarType
  brand: string
  model: string
  year: number
  mileage: number
  engine: CarEngine
  transmission: CarTransmission
  dimensions?: CarDimensions
}
