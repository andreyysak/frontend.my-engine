import type { MaintenanceType, NotifyBefore, ServiceInterval } from '../maintenance'

export type ReminderStatus = 'ok' | 'soon' | 'overdue'

export interface Reminder {
  id: string
  carId: string
  type: MaintenanceType
  enabled: boolean
  interval: ServiceInterval
  notifyBefore: NotifyBefore
}

export interface ReminderDue {
  reminderId: string
  carId: string
  type: MaintenanceType
  status: ReminderStatus
  nextDueOdometer?: number
  nextDueDate?: string
  remainingDistance?: number
  remainingDays?: number
}
