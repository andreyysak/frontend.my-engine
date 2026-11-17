import { useCars } from '@/features/cars/queries/cars.queries.ts'
import { useSelectedCarStore } from '@/features/cars/store/selected-car.store.ts'

export const useSelectedCar = () => {
  const { data: cars, isLoading, isError } = useCars()
  const selectedCarId = useSelectedCarStore((state) => state.selectedCarId)
  const selectCar = useSelectedCarStore((state) => state.selectCar)

  const car = cars?.find((item) => item.id === selectedCarId) ?? cars?.[0] ?? null

  return { car, cars: cars ?? [], isLoading, isError, selectCar }
}
