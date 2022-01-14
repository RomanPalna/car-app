import CarBrand from "./CarBrand";
import CarModels from "./CarModel";
import CarCard from "./CarCard";
import PaginationControlled from "./Pagination";

export default function ChoosingAuto() {
  return (
    <div className="choosing">
      <h2 className="choosing__title">Выберите авто</h2>
      <div className="choosing__inputs">
        <CarBrand />
        <CarModels />
      </div>
      <CarCard />
      <PaginationControlled />
    </div>
  );
}
