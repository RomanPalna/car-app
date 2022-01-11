import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMarkId, getModelsId, getCarCards } from "../../../redux/selectors";

import * as autoOperations from "../../../redux/autosCard/auto-operations";
import CheckboxLabels from "./CheckboxLabel";
import noImage from "../../../images/noImage.jpg";

const car = {
  image: noImage,
  year: 2021,
  engine: "автомат",
  brand: "Hyundai",
  model: "Solaris",
  price: 14000,
};

export default function CarCard() {
  const dispatch = useDispatch();

  const model = useSelector(getModelsId);
  const mark = useSelector(getMarkId);
  const carCards = useSelector(getCarCards);

  useEffect(() => {
    let cars = {
      model: model,
      mark: mark,
    };
    dispatch(autoOperations.fetchCarCards(cars));
  }, [dispatch, mark, model]);

  return (
    <>
      <p className="car__count">Найдено 1 автомобиль</p>

      <div className="car">
        <img className="car__img" alt="car" src={car.image} />

        <form className="car__form">
          <p className="car__form--year">
            <span>{car.year} год</span> / <span>{car.engine}</span>
          </p>
          <p className="car__form--model">
            {car.brand} {car.model} {car.year} {"года"}
          </p>
          <p className="car__form--credit">
            <span className="car__form--credit--price">{car.price} грн</span>
            <span className="car__form--credit--loan">
              от {car.price / 14} грн/месяц
            </span>
          </p>
          <p className="car__form--protect">
            <span className="car__form--protect--price">{car.price} грн</span>
            <span className="car__form--protect--loan">
              от {car.price / 14} грн/месяц
            </span>
          </p>

          <CheckboxLabels />
        </form>
      </div>
    </>
  );
}
