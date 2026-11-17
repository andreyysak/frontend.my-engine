import { RouterProvider } from 'react-router/dom'
import { router } from '@/app/router/router.tsx'
import { AppProviders } from '@/app/providers'

export const App = () => {
  return (
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  )
}
