import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMarkId, getModelsId, getCarCards } from "../../../redux/selectors";
import * as autoOperations from "../../../redux/autosCard/auto-operations";

import CarView from "./CarView";

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
      {carCards.length === 0 ? (
        <p>Не найдено автомобилей отвечающим Вашим параметрам запроса</p>
      ) : (
        <p className="car__count">Найдено {carCards.length} автомобиль</p>
      )}
      <div className="car__container">
        {carCards.map((car) => (
          <CarView car={car} key={car.userId} />
        ))}
      </div>
    </>
  );
}
