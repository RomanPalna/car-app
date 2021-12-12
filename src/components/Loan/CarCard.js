import noImage from "../../images/noImage.jpg";

const car = {
  image: noImage,
  year: 2014,
  engine: "automat",
  brand: "Hyundai",
  model: "Solaris",
  price: 14000,
};

export default function CarCard() {
  return (
    <ul>
      <li>
        <img alt="car" src={car.image} />
      </li>
    </ul>
  );
}
