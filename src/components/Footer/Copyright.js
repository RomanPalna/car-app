import devlogo from "../../images/devlogo.png";

export default function Copyright() {
  return (
    <div className="copyright">
      <div className="copyright__container">
        <p className="copyright__brand">Crystal Motors (c) 2021</p>

        <span className="copyright__logo">
          <p className="copyright__logo--text">Разработка сайта</p>
          <img className="copyright__logo--img" alt="devlogo" src={devlogo} />
        </span>
      </div>
    </div>
  );
}
