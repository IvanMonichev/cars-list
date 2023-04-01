import Header from '../header/header';
import CarsList from '../cars-list/cars-list';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <main className="main">
        <section className='main__item cars'>
          <div className="cars__sorting">
            <h2 className="cars__sorting-name">Сортировать по:</h2>
            <button className="cars__sorting-btn">Год выпуска</button>
            <button className="cars__sorting-btn">Стоимость</button>
          </div>
          <h2 className='visually-hidden'>Список машин</h2>
          <CarsList />
        </section>
        <section className='main__item map'>
          <h2 className='visually-hidden'>Карта</h2>
        </section>
      </main>
    </>
  );
}

export default App;
