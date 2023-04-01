import Header from '../header/header';
import CarsList from '../cars-list/cars-list';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <main className="main">
        <section className='main__item cars'>

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
