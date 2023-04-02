import { useAppDispatch, useAppSelector } from '../../hooks';
import CarsCard from '../cars-card/cars-card';
import SortingList from '../sorting-list/sorting-list';
import { Comparator, SortName } from '../../constants/sorting';
import { setSorting } from '../../store/action';
import { Cars } from '../../types/cars';
import Spinner from '../spinner/spinner';

type CarsListProps = {
  cars: Cars[]
}

function CarsList({ cars }: CarsListProps): JSX.Element {

  const dispatch = useAppDispatch();
  const activeSorting = useAppSelector((state) => state.sorting);
  const sortedCars = useAppSelector((state) => [...cars].sort(Comparator[state.sorting]));
  const isCarsLoading = useAppSelector((state) => state.isCarsLoading);

  const onSortingChange = (name: SortName): void => {
    dispatch(setSorting(name))
  }

  if (isCarsLoading) {
    return <Spinner />
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
