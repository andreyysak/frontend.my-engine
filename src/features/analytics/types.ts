import type { ReactNode } from 'react'

export type KpiColor = 'blue' | 'green' | 'orange' | 'cyan' | 'red' | 'purple' | 'indigo' | 'gray'

export interface Kpi {
  key: number
  title: string
  icon: ReactNode
  value: number
  unit: string
  color: KpiColor
}
