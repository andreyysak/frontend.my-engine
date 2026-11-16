import type { FuelLog } from '@shared/types'
import { fuels } from '@/mocks'
import { delay } from '@shared/utils/delay.ts'

export const getFuelLogs = async (carId: string): Promise<FuelLog[]> => {
  await delay()
  return fuels.filter((fuel) => fuel.carId === carId)
}
