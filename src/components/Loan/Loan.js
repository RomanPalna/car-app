import Title from "./Title";
import ChoosingAuto from "./Car";
import LoanCalculator from "./Calculator";
import Information from "./Information";
import AutoCost from "./Calculator/AutoCost";
import Footer from "../Footer/Footer";

export default function Loan() {
  return (
    <main className="loan">
      <Title />
      <ChoosingAuto />
      <LoanCalculator />
      <AutoCost />
      <Information />
      <Footer/>
    </main>
  );
}
