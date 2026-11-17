import { useQuery } from '@tanstack/react-query'
import { getCars } from '@api/car'

export const carsKeys = {
  all: ['cars'] as const,
}

export const useCars = () => {
  return useQuery({
    queryKey: carsKeys.all,
    queryFn: getCars,
  })
}
