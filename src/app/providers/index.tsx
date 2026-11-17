import type { ReactNode } from 'react'
import { QueryProvider } from '@/app/providers/query-provider.tsx'

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return <QueryProvider>{children}</QueryProvider>
}
