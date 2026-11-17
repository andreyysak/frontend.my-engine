import type { Maintenance } from '@shared/types'
import { maintenances } from '@/mocks'
import { delay } from '@shared/utils/delay.ts'

const store: Maintenance[] = [...maintenances]

export const getMaintenance = async (carId: string): Promise<Maintenance[]> => {
  await delay()
  return store.filter((maintenance) => maintenance.carId === carId)
}

export const addMaintenance = async (data: Omit<Maintenance, 'id'>): Promise<Maintenance> => {
  await delay()
  const maintenance: Maintenance = { ...data, id: crypto.randomUUID() }
  store.push(maintenance)
  return maintenance
}
