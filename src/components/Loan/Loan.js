import Title from "./Title";
import ChoosingAuto from "./Car";
import LoanCalculator from "./Calculator";
import Information from "../Information";

import AutoCost from "./Calculator/AutoCost";

export default function Loan() {
  return (
    <main className="loan">
      <Title />
      <ChoosingAuto />
      <LoanCalculator />
      <AutoCost />
      <Information />
    </main>
  );
}
