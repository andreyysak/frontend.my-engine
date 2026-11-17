import type { Car } from '@shared/types'
import { cars } from '@/mocks'
import { delay } from '@shared/utils/delay.ts'

const store: Car[] = [...cars]

export const getCars = async (): Promise<Car[]> => {
  await delay()
  return [...store]
}

export const getCarById = async (id: string): Promise<Car | null> => {
  await delay()
  const car = store.find((item) => item.id === id)
  return car ?? null
}

export const addCar = async (data: Omit<Car, 'id'>): Promise<Car> => {
  await delay()
  const car: Car = { ...data, id: crypto.randomUUID() }
  store.push(car)
  return car
}

export const updateCar = async (
  id: string,
  data: Partial<Omit<Car, 'id'>>,
): Promise<Car | null> => {
  await delay()
  const index = store.findIndex((item) => item.id === id)
  if (index === -1) return null
  const updatedCar: Car = { ...store[index], ...data }
  store[index] = updatedCar
  return updatedCar
}

export const deleteCar = async (id: string): Promise<void> => {
  await delay()
  const index = store.findIndex((item) => item.id === id)
  if (index !== -1) store.splice(index, 1)
}
