import { createBrowserRouter } from 'react-router'
import { MainLayout } from '@/app/layouts/main-layout'
import { AnalyticsPage } from '@/pages/analytics'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <AnalyticsPage />,
      },
    ],
  },
])
