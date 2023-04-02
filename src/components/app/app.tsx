import Header from '../header/header';
import CarsList from '../cars-list/cars-list';
import Map from '../map/map'
import { useAppSelector } from '../../hooks';
import PopupEdit from '../popup-edit/popup-edit';

function App(): JSX.Element {
  const cars = useAppSelector((state) => state.cars);

  return (
    <>
      <Header />
      <main className="main">
        <section className='main__item cars'>
          <CarsList cars={cars} />
        </section>
        <section className='main__item'>
          <h2 className='visually-hidden'>Карта</h2>
          <Map
            locations={cars.map(({ latitude, longitude }) => ({ latitude, longitude }))}
          />
        </section>
      </main>
      <PopupEdit cars={cars} />
    </>
  );
}

export default App;
