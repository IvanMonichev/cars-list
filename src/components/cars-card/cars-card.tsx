import { Cars } from '../../types/cars';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { deleteCars } from '../../store/action';

type CarsCardProps = Cars;

function CarsCard({ id, name, model, latitude, longitude, price, color, year }: CarsCardProps): JSX.Element {

  const dispatch = useAppDispatch();
  const [isFocusCard, setIsFocusCard] = useState<boolean>(false);
  const handleDeleteCard = () => {
    dispatch(deleteCars(id));
  }

  const handleCardMouseMove = () => {
    setIsFocusCard(true)
  }
  const handleCardMouseLeave = () => {
    setIsFocusCard(false)
  }


  return (
    <li className="cars-list__item" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
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
          <span className='secondary-text'>Координаты:</span> {`${latitude}, ${longitude}`}
        </p>
        <div className={`cars-card__menu ${isFocusCard ? 'cars-card__menu--active' : ''}`}>
          <button className="cars-card__menu-btn btn-edit"></button>
          <button className="cars-card__menu-btn btn-delete" onClick={handleDeleteCard}></button>
        </div>
      </article>

    </li>
  );
}

export default CarsCard;
