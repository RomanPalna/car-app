import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="header__navigation">
      <NavLink to="/buy" className="link">
        Купить
      </NavLink>
      <NavLink to="sell" className="link">
        Продать
      </NavLink>
      <NavLink to="loan" className="link">
        Автокредит
      </NavLink>
      <NavLink to="contacts" className="link">
        Контакты
      </NavLink>
    </nav>
  );
}
