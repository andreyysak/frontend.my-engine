import './index.scss'
import { useSelectedCar } from '@/features/cars'

export const CarList = () => {
  const { car: selectedCar, cars, isLoading, isError, selectCar } = useSelectedCar()

  if (isLoading) return <p className="car-list__state">Loading</p>
  if (isError) return <p className="car-list__state">Failed to load cars</p>

  return (
    <ul className="car-list">
      {cars.map((car) => (
        <li key={car.id}>
          <button
            type="button"
            className={`car-list__item${car.id === selectedCar?.id ? ' car-list__item--active' : ''}`}
            onClick={() => selectCar(car.id)}
          >
            {car.brand} {car.model} · {car.year}
          </button>
        </li>
      ))}
    </ul>
  )
}
