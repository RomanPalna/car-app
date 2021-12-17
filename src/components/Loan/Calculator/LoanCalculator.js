import FirstinstallmentSlider from "./FirstInstallmentSlider";
import LoanTermSlider from "./LoanTermSlider";

export default function LoanCalculator() {
  return (
    <div className="calculator">
      <div className="calculator__loan">
        <p>Желаемый срок кредита</p>
        <LoanTermSlider />
      </div>

      <div className="calculator__frstInst">
        <p>Первый взнос</p>
        <FirstinstallmentSlider />
      </div>
    </div>
  );
}
