import type { Maintenance } from '@shared/types'
import { maintenances } from '@/mocks'
import { delay } from '@shared/utils/delay.ts'

export const getMaintenance = async (carId: string): Promise<Maintenance[]> => {
  await delay()
  return maintenances.filter((maintenance) => maintenance.carId === carId)
}
