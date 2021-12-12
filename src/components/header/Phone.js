import phone from "../../images/phone.png";

export default function Phone() {
  return (
    <div className="header__phone">
      <img className="phone__icon" alt="phone icon" src={phone}></img>
      <a className="phone__link" href="tel:+79946643627">
        +7 994-664-36-27
      </a>
    </div>
  );
}
