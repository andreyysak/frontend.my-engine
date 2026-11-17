import type { ChargeLog, FuelLog, RefuelLog } from '@shared/types'
import { fuels } from '@/mocks'
import { delay } from '@shared/utils/delay.ts'

const store: FuelLog[] = [...fuels]

export const getFuelLogs = async (carId: string): Promise<FuelLog[]> => {
  await delay()
  return store.filter((fuel) => fuel.carId === carId)
}

export const addFuelLog = async (
  data: Omit<RefuelLog, 'id'> | Omit<ChargeLog, 'id'>,
): Promise<FuelLog> => {
  await delay()
  const fuel: FuelLog = { ...data, id: crypto.randomUUID() }
  store.push(fuel)
  return fuel
}
