import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as calculatorActions from "../../../redux/calculator/calculator-action";
import * as selectors from "../../../redux/selectors";
import calculator from "../../../redux/js/index";

export default function AutoCost() {
  const price = useSelector(selectors.getFirstinstallment);
  const months = useSelector(selectors.getMonths);
  const percentage = useSelector(selectors.getPercentage);
  const priceForEveryMonths = useSelector(selectors.getPriceForEveryMonths);
  const dispatch = useDispatch();

  console.log(price, months, percentage);

  const isThisNaN = (value) => {
    if (isNaN(value)) {
      return 0;
    }
    return value.toFixed(0);
  };

  useEffect(() => {
    dispatch(
      calculatorActions.getPriceForEveryMonths(
        calculator(price, months, percentage)
      )
    );
  }, [dispatch, months, percentage, price]);

  return (
    <div className="autoCost__section">
      <div className="autoCost cost">
        <p className="autoCost__cost">Стоимость авто</p>
        <p className="autoCost__sum">{price || 0} грн</p>
      </div>
      <div className="autoCost">
        <p className="autoCost__cost">Ежемесячный платёж</p>
        <p className="autoCost__sum">{isThisNaN(priceForEveryMonths)} грн</p>
      </div>
    </div>
  );
}

// На сторінці відобразити перших 10 оголошень, реалізувати можливість вибору одного з варіантів для подальшого розрахунку платежу по кредиту. Формула розрахунку ануїтетного платежу (А) являє собою таке співвідношення: А = К * (П / (1 + П) -М-1), де К - сума кредиту (різниця між ціною в оголошені і першим вкладом який в свою чергу потрібно отримати з елементу повзунка що відображений на макеті), П - процентна ставка (17%), М - кількість місяців. Результат розрахунку відобразити в блоці з підписом "Ежемесячный платёж"
