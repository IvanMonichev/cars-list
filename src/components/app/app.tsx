import Header from '../header/header';

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
          <ul className="cars-list">
            <li className="cars-list__item">
              <article className="cars-card">
                <h2 className='cars-card__name'>Toyota</h2>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Модель: </span>Camry
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Год:</span> 2021
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Цвет:</span> red
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Цена:</span> 21000
                </p>
                <p className="cars-card__text">
                  <span className='secondary-text'>Координаты:</span> 55.753215, 37.620393
                </p>
              </article>
            </li>
            <li className="cars-list__item">
              <article className="cars-card">
                <h2 className='cars-card__name'>Toyota</h2>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Модель: </span>Camry
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Год:</span> 2021
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Цвет:</span> red
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Цена:</span> 21000
                </p>
                <p className="cars-card__text">
                  <span className='secondary-text'>Координаты:</span> 55.753215, 37.620393
                </p>
              </article>
            </li>
            <li className="cars-list__item">
              <article className="cars-card">
                <h2 className='cars-card__name'>Toyota</h2>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Модель: </span>Camry
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Год:</span> 2021
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Цвет:</span> red
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Цена:</span> 21000
                </p>
                <p className="cars-card__text">
                  <span className='secondary-text'>Координаты:</span> 55.753215, 37.620393
                </p>
              </article>
            </li>
            <li className="cars-list__item">
              <article className="cars-card">
                <h2 className='cars-card__name'>Toyota</h2>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Модель: </span>Camry
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Год:</span> 2021
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Цвет:</span> red
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Цена:</span> 21000
                </p>
                <p className="cars-card__text">
                  <span className='secondary-text'>Координаты:</span> 55.753215, 37.620393
                </p>
              </article>
            </li>
            <li className="cars-list__item">
              <article className="cars-card">
                <h2 className='cars-card__name'>Toyota</h2>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Модель: </span>Camry
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Год:</span> 2021
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Цвет:</span> red
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Цена:</span> 21000
                </p>
                <p className="cars-card__text">
                  <span className='secondary-text'>Координаты:</span> 55.753215, 37.620393
                </p>
              </article>
            </li>
            <li className="cars-list__item">
              <article className="cars-card">
                <h2 className='cars-card__name'>Toyota</h2>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Модель: </span>Camry
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Год:</span> 2021
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Цвет:</span> red
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Цена:</span> 21000
                </p>
                <p className="cars-card__text">
                  <span className='secondary-text'>Координаты:</span> 55.753215, 37.620393
                </p>
              </article>
            </li>
            <li className="cars-list__item">
              <article className="cars-card">
                <h2 className='cars-card__name'>Toyota</h2>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Модель: </span>Camry
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Год:</span> 2021
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Цвет:</span> red
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Цена:</span> 21000
                </p>
                <p className="cars-card__text">
                  <span className='secondary-text'>Координаты:</span> 55.753215, 37.620393
                </p>
              </article>
            </li>
            <li className="cars-list__item">
              <article className="cars-card">
                <h2 className='cars-card__name'>Toyota</h2>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Модель: </span>Camry
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Год:</span> 2021
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Цвет:</span> red
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Цена:</span> 21000
                </p>
                <p className="cars-card__text">
                  <span className='secondary-text'>Координаты:</span> 55.753215, 37.620393
                </p>
              </article>
            </li>
            <li className="cars-list__item">
              <article className="cars-card">
                <h2 className='cars-card__name'>Toyota</h2>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Модель: </span>Camry
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Год:</span> 2021
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Цвет:</span> red
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Цена:</span> 21000
                </p>
                <p className="cars-card__text">
                  <span className='secondary-text'>Координаты:</span> 55.753215, 37.620393
                </p>
              </article>
            </li>
            <li className="cars-list__item">
              <article className="cars-card">
                <h2 className='cars-card__name'>Toyota</h2>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Модель: </span>Camry
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Год:</span> 2021
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Цвет:</span> red
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Цена:</span> 21000
                </p>
                <p className="cars-card__text">
                  <span className='secondary-text'>Координаты:</span> 55.753215, 37.620393
                </p>
              </article>
            </li>
            <li className="cars-list__item">
              <article className="cars-card">
                <h2 className='cars-card__name'>Toyota</h2>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Модель: </span>Camry
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Год:</span> 2021
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Цвет:</span> red
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Цена:</span> 21000
                </p>
                <p className="cars-card__text">
                  <span className='secondary-text'>Координаты:</span> 55.753215, 37.620393
                </p>
              </article>
            </li>
            <li className="cars-list__item">
              <article className="cars-card">
                <h2 className='cars-card__name'>Toyota</h2>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Модель: </span>Camry
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Год:</span> 2021
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Цвет:</span> red
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Цена:</span> 21000
                </p>
                <p className="cars-card__text">
                  <span className='secondary-text'>Координаты:</span> 55.753215, 37.620393
                </p>
              </article>
            </li>
            <li className="cars-list__item">
              <article className="cars-card">
                <h2 className='cars-card__name'>Toyota</h2>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Модель: </span>Camry
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Год:</span> 2021
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Цвет:</span> red
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Цена:</span> 21000
                </p>
                <p className="cars-card__text">
                  <span className='secondary-text'>Координаты:</span> 55.753215, 37.620393
                </p>
              </article>
            </li>
            <li className="cars-list__item">
              <article className="cars-card">
                <h2 className='cars-card__name'>Toyota</h2>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Модель: </span>Camry
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Год:</span> 2021
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Цвет:</span> red
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Цена:</span> 21000
                </p>
                <p className="cars-card__text">
                  <span className='secondary-text'>Координаты:</span> 55.753215, 37.620393
                </p>
              </article>
            </li>
            <li className="cars-list__item">
              <article className="cars-card">
                <h2 className='cars-card__name'>Toyota</h2>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Модель: </span>Camry
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Год:</span> 2021
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Цвет:</span> red
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Цена:</span> 21000
                </p>
                <p className="cars-card__text">
                  <span className='secondary-text'>Координаты:</span> 55.753215, 37.620393
                </p>
              </article>
            </li>
            <li className="cars-list__item">
              <article className="cars-card">
                <h2 className='cars-card__name'>Toyota</h2>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Модель: </span>Camry
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Год:</span> 2021
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Цвет:</span> red
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Цена:</span> 21000
                </p>
                <p className="cars-card__text">
                  <span className='secondary-text'>Координаты:</span> 55.753215, 37.620393
                </p>
              </article>
            </li>
            <li className="cars-list__item">
              <article className="cars-card">
                <h2 className='cars-card__name'>Toyota</h2>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Модель: </span>Camry
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Год:</span> 2021
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Цвет:</span> red
                </p>
                <p className='cars-card__text'>
                  <span className='secondary-text'>Цена:</span> 21000
                </p>
                <p className="cars-card__text">
                  <span className='secondary-text'>Координаты:</span> 55.753215, 37.620393
                </p>
              </article>
            </li>
          </ul>
        </section>
        <section className='main__item map'>
          <h2 className='visually-hidden'>Карта</h2>
        </section>
      </main>
    </>
  );
}

export default App;
