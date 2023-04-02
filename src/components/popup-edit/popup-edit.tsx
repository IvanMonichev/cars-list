import { useAppDispatch, useAppSelector } from '../../hooks';
import { openPopup, updateCar } from '../../store/action';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Cars } from '../../types/cars';

type PopupEditProps = {
  cars: Cars[];
}

function PopupEdit({ cars }: PopupEditProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [dataCar, setDataCar] = useState({ name: 'Наименование', model: 'Модель', price: 0 });

  const isPopupOpened = useAppSelector((state) => state.isPopupOpened);
  const idOpenedCar = useAppSelector((state) => state.idOpenedCar);
  const car = cars.find((car) => car.id === idOpenedCar) as Cars;

  useEffect(() => {
    if (car) {
      setDataCar(car)
    }
  }, [car]);

  const handleClosePopup = () => {
    dispatch(openPopup(false))
  }

  const handleNameChange = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    setDataCar({...dataCar, name: evt.target.value})
  }

  const handleModelChange = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    setDataCar({...dataCar, model: evt.target.value})
  }

  const handlePriceChange = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    setDataCar({...dataCar, price: Number(evt.target.value)})
  }

  const handleUpdateCar = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    const updateDataCar = { ...car, ...dataCar } as Cars;
    dispatch(updateCar(updateDataCar));
    dispatch(openPopup(false))
  }

  return (
    (isPopupOpened &&
      (<section className='popup'>
        <div className='popup__wrapper'>
          <h2 className="popup__title">Редактирование карточки</h2>
          <form className="form-edit" action="#" method="get" onSubmit={handleUpdateCar}>
            <div className="form-group">
              <label className="form-group__label" htmlFor="name">Наименование:</label>
              <input className="form-group__field" type="text" name="name" id="name" onChange={handleNameChange} value={dataCar.name} />
            </div>
            <div className="form-group">
              <label className="form-group__label" htmlFor="model">Модель:</label>
              <input className="form-group__field" type="text" name="model" id="model" onChange={handleModelChange} value={dataCar.model} />
            </div>
            <div className="form-group">
              <label className="form-group__label" htmlFor="model">Цена:</label>
              <input className="form-group__field" type="text" name="model" id="model" onChange={handlePriceChange} value={dataCar.price} />
            </div>
            <div className='buttons-group'>
              <button className='buttons-group__btn' type="submit">Обновить</button>
              <button className='buttons-group__btn' type="reset" onClick={handleClosePopup}>Закрыть</button>
            </div>
          </form>
        </div>
      </section>)
    ) as JSX.Element);
}

export default PopupEdit;
