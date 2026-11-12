import type { Car } from '@shared/types'

export const cars: Car[] = [
  {
    id: 'car-1',
    type: 'car',
    brand: 'Toyota',
    model: 'Camry',
    year: 2018,
    mileage: 84200,
    engine: { powertrain: 'gasoline', volume: 2.5 },
    transmission: { gearbox: 'automatic', drive: 'fwd' },
  },
  {
    id: 'car-2',
    type: 'car',
    brand: 'Tesla',
    model: 'Model 3',
    year: 2021,
    mileage: 42750,
    engine: { powertrain: 'electric' },
    transmission: { gearbox: 'automatic', drive: 'rwd' },
  },
]
