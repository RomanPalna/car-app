import FirstinstallmentSlider from "./FirstInstallmentSlider";
import LoanTermSlider from "./LoanTermSlider";

export default function LoanCalculator() {
  return (
    <>
      <div className="calculator">
        <div className="calculator__loan">
          <p className="calculator__title">Желаемый срок кредита</p>
          <LoanTermSlider />
          <ul className="calculator__data">
            <li>1 месяц</li>
            <li>60 месяцев </li>
          </ul>
        </div>

        <div className="calculator__frstInst">
          <p className="calculator__title">Первый взнос</p>
          <FirstinstallmentSlider />
          <ul className="calculator__data">
            <li>0%</li>
            <li>50%</li>
          </ul>
        </div>
      </div>
      <div className="calculator__line"></div>
    </>
  );
}
