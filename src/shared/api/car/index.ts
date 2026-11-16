import type { Car } from '@shared/types'
import { cars } from '@/mocks'
import { delay } from '@shared/utils/delay.ts'

export const getCars = async (): Promise<Car[]> => {
  await delay()
  return cars
}

export const getCarById = async (id: string): Promise<Car | null> => {
  await delay()
  const car = cars.find((item) => item.id === id)
  return car ?? null
}
