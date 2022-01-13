import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMarkId, getModelsId, getCarCards } from "../../../redux/selectors";
import * as autoOperations from "../../../redux/autosCard/auto-operations";

import CarView from "./CarView";

export default function CarCard() {
  const [selectedCar, setSelectedCar] = useState(null);
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
          <CarView
            key={car.userId}
            car={car}
            selected={selectedCar === car.userId}
            onHandleSelect={() =>
              setSelectedCar(selectedCar !== car.userId ? car.userId : false)
            }
          />
        ))}
      </div>
    </>
  );
}
