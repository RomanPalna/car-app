import { useSelector } from "react-redux";
import * as selectors from "../../../redux/selectors";
import CheckboxLabels from "./CheckboxLabel";
import noImage from "../../../images/noImage.jpg";

export default function CarView({ car, selected, onHandleSelect }) {
  const months = useSelector(selectors.getMonths);
  const price = car.UAH;

  const sum = price / months;

  return (
    <div className="car">
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
            от {sum.toFixed(0)} грн/месяц
          </span>
        </p>
        <p className="car__form--protect">
          <span className="car__form--protect--price">{car.UAH} грн</span>
          <span className="car__form--protect--loan">
            от {sum.toFixed(0)} грн/месяц
          </span>
        </p>

        <CheckboxLabels
          price={car.UAH}
          cheked={selected}
          onHandleSelect={() => onHandleSelect()}
        />
      </form>
    </div>
  );
}
