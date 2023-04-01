import { useAppSelector } from '../../hooks';
import CarsCard from '../cars-card/cars-card';

function CarsList(): JSX.Element {

  const cars = useAppSelector((state) => state.cars);

  console.log(cars);


  return (
    <ul className="cars-list">
      {cars.map((car) => (
        <CarsCard
          key={car.id}
          {...car}
        />
      ))}
    </ul>
  );
}

export default CarsList;
