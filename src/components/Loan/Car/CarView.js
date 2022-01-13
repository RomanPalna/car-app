import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import * as selectors from "../../../redux/selectors";
import CheckboxLabels from "./CheckboxLabel";
import noImage from "../../../images/noImage.jpg";

export default function CarView(car) {
  const [selectedCar, setSelectedCar] = useState(null);

  const months = useSelector(selectors.getMonths);
  const price = car.car.UAH;

  const sum = price / months;

  useEffect(() => {
    setSelectedCar(car.car.userId);
  }, [car.car.userId]);

  return (
    <div className="car">
      <img
        className="car__img"
        alt="car"
        src={car.car.photoData.seoLinkF ?? noImage}
      />

      <form className="car__form">
        <p className="car__form--year">
          <span>{car.car.autoData.year} год</span> /{" "}
          <span>{car.car.autoData.gearboxName}</span>
        </p>
        <p className="car__form--model">
          {car.car.markName} {car.car.modelName} {car.car.autoData.year}{" "}
          {"года"}
        </p>
        <p className="car__form--credit">
          <span className="car__form--credit--price">{car.car.UAH} грн</span>
          <span className="car__form--credit--loan">
            от {sum.toFixed(0)} грн/месяц
          </span>
        </p>
        <p className="car__form--protect">
          <span className="car__form--protect--price">{car.car.UAH} грн</span>
          <span className="car__form--protect--loan">
            от {sum.toFixed(0)} грн/месяц
          </span>
        </p>

        <CheckboxLabels price={car.car.UAH} selectedCar={selectedCar} />
      </form>
    </div>
  );
}
