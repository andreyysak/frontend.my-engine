import './index.scss'
import type { Kpi } from '@/features/analytics/types.ts'
import type { FC } from 'react'

interface Props {
  data: Kpi
}

export const AnalyticsKpi: FC<Props> = ({ data }) => {
  return (
    <div className="analytics-kpi">
      <div className={`analytics-kpi__icon analytics-kpi__icon--${data.color}`}>{data.icon}</div>
      <div className="analytics-kpi__main">
        <span className="analytics-kpi__value">
          {data.value.toLocaleString('uk-UA')}
          <span className="analytics-kpi__unit">{data.unit}</span>
        </span>
        <span className="analytics-kpi__title">{data.title}</span>
      </div>
    </div>
  )
}
