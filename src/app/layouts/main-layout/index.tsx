import './index.scss'
import { Header } from '@shared/components/core/header'
import { Outlet } from 'react-router'

export const MainLayout = () => {
  return (
    <section className="main-layout">
      <Header />
      <div className="main-layout__content">
        <Outlet />
      </div>
    </section>
  )
}
