import type { Trip } from '@shared/types'
import { trips } from '@/mocks'
import { delay } from '@shared/utils/delay.ts'

export const getTrips = async (carId: string): Promise<Trip[]> => {
  await delay()
  return trips.filter((trip) => trip.carId === carId)
}
