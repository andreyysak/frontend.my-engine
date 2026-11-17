import type { Trip } from '@shared/types'
import { trips } from '@/mocks'
import { delay } from '@shared/utils/delay.ts'

const store: Trip[] = [...trips]

export const getTrips = async (carId: string): Promise<Trip[]> => {
  await delay()
  return store.filter((trip) => trip.carId === carId)
}

export const addTrip = async (data: Omit<Trip, 'id'>): Promise<Trip> => {
  await delay()
  const trip: Trip = { ...data, id: crypto.randomUUID() }
  store.push(trip)
  return trip
}
