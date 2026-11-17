import { createBrowserRouter } from 'react-router'
import { MainLayout } from '@/app/layouts/main-layout'
import { AnalyticsPage } from '@/pages/analytics'
import { NotFoundPage } from '@/pages/not-found'
import { GaragePage } from '@/pages/garage'
import { CarDetailsPage } from '@/pages/car-details'
import { MaintenancePage } from '@/pages/maintenance'
import { FuelPage } from '@/pages/fuel'
import { TripsPage } from '@/pages/trips'
import { SettingsPage } from '@/pages/settings'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <AnalyticsPage />,
      },
      { path: 'garage', element: <GaragePage /> },
      { path: 'garage/:carId', element: <CarDetailsPage /> },
      { path: 'maintenance', element: <MaintenancePage /> },
      { path: 'fuel', element: <FuelPage /> },
      { path: 'trips', element: <TripsPage /> },
      { path: 'settings', element: <SettingsPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
