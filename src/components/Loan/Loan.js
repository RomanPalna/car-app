import { useEffect, useState } from "react";
import serviceAPI from "../../api-services";
import Title from "./Title";
import ChoosingAuto from "./Car";
import LoanCalculator from "./Calculator";
import Information from "./Information";
import AutoCost from "./Calculator/AutoCost";

export default function Loan() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    serviceAPI.apiService().then((cars) => setCars(cars));
  }, []);

  console.log(cars);

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
