import { useAppDispatch, useAppSelector } from '../../hooks';
import CarsCard from '../cars-card/cars-card';
import SortingList from '../sorting-list/sorting-list';
import { Comparator, SortName } from '../../constants/sorting';
import { setSorting } from '../../store/action';

function CarsList(): JSX.Element {

  const dispatch = useAppDispatch();
  const activeSorting = useAppSelector((state) => state.sorting);
  const cars = useAppSelector((state) => state.cars);
  const sortedCars = useAppSelector((state) => [...cars].sort(Comparator[state.sorting]));

  const onSortingChange = (name: SortName): void => {
    dispatch(setSorting(name))
  }

  return (
    <>
      <SortingList
        onChange={onSortingChange}
        activeSorting={activeSorting}
      />
      <h2 className="visually-hidden">Список машин</h2>
      <ul className="cars-list">
        {sortedCars.map((car) => (
          <CarsCard key={car.id} {...car} />
        ))}
      </ul>
    </>
  );
}

export default CarsList;
