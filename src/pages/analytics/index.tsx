import './index.scss'
import { AnalyticsStats } from '@/features/analytics'
import { CarList } from '@/features/cars'

export const AnalyticsPage = () => {
  return (
    <section className="analytics">
      <AnalyticsStats />
      <CarList />
    </section>
  )
}
