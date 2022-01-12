import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMarkId, getModelsId, getCarCards } from "../../../redux/selectors";
import * as autoOperations from "../../../redux/autosCard/auto-operations";
import CheckboxLabels from "./CheckboxLabel";
import noImage from "../../../images/noImage.jpg";

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
          <div className="car" key={car.userId}>
            <img
              className="car__img"
              alt="car"
              src={car.photoData.seoLinkF ?? noImage}
            />

            <form className="car__form">
              <p className="car__form--year">
                <span>{car.autoData.year} год</span> /{" "}
                <span>{car.autoData.gearboxName}</span>
              </p>
              <p className="car__form--model">
                {car.markName} {car.modelName} {car.autoData.year} {"года"}
              </p>
              <p className="car__form--credit">
                <span className="car__form--credit--price">{car.UAH} грн</span>
                <span className="car__form--credit--loan">
                  от {car.price / 14} грн/месяц
                </span>
              </p>
              <p className="car__form--protect">
                <span className="car__form--protect--price">{car.UAH} грн</span>
                <span className="car__form--protect--loan">
                  от {Number(car.price) / 14} грн/месяц
                </span>
              </p>

              <CheckboxLabels price={car.UAH} />
            </form>
          </div>
        ))}
      </div>
    </>
  );
}
