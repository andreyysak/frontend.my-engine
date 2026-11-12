import './index.scss'
import type { Kpi } from '@/features/analytics/types.ts'
import { CoinsIcon, GaugeIcon, RoadIcon, WalletIcon } from '@shared/components/ui/icons.tsx'
import { AnalyticsKpi } from '@/features/analytics/components/analytics-kpi'

const MOCK: Kpi[] = [
  {
    key: 1,
    title: 'Expenses this month',
    icon: <WalletIcon />,
    value: 12480,
    unit: '₴',
    color: 'orange',
  },
  {
    key: 2,
    title: 'Average Fuel Consumption',
    icon: <GaugeIcon />,
    value: 7.4,
    unit: 'L/100 km',
    color: 'green',
  },
  {
    key: 3,
    title: 'Monthly Mileage',
    icon: <RoadIcon />,
    value: 1240,
    unit: 'km',
    color: 'cyan',
  },
  {
    key: 4,
    title: 'Cost per Kilometer',
    icon: <CoinsIcon />,
    value: 4.8,
    unit: '₴/km',
    color: 'purple',
  },
]

export const AnalyticsStats = () => {
  return (
    <div className="analytics-stats">
      {MOCK.map((stat) => (
        <AnalyticsKpi data={stat} key={stat.key} />
      ))}
    </div>
  )
}
