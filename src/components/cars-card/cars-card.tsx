import { Cars } from '../../types/cars';

type CarsCardProps = Cars;

function CarsCard({ name, model, latitude, longitude, price, color, year }: CarsCardProps): JSX.Element {
  return (
    <li className="cars-list__item">
      <article className="cars-card">
        <h2 className='cars-card__name'>{name}</h2>
        <p className='cars-card__text'>
          <span className='secondary-text'>Модель: </span>{model}
        </p>
        <p className='cars-card__text'>
          <span className='secondary-text'>Год:</span> {year}
        </p>
        <p className='cars-card__text'>
          <span className='secondary-text'>Цвет:</span> {color}
        </p>
        <p className='cars-card__text'>
          <span className='secondary-text'>Цена:</span> {price}
        </p>
        <p className="cars-card__text">
          <span className='secondary-text'>Координаты:</span> {`${latitude} ${longitude}`}
        </p>
      </article>
    </li>
  );
}

export default CarsCard;
