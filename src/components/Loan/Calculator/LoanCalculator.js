import LoanTermSlider from "./LoanTermSlider";

export default function LoanCalculator() {
  return (
    <div className="calculator">
      <LoanTermSlider />
      <p>Желаемый срок кредита</p>
    </div>
  );
}
