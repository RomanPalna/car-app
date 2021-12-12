import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/buy" className="link" activeClassName="activeLink">
        Купить
      </NavLink>
      <NavLink to="sell" className="link" activeClassName="activeLink">
        Продать
      </NavLink>
      <NavLink to="loan" className="link" activeClassName="activeLink">
        Автокредит
      </NavLink>
      <NavLink to="contacts" className="link" activeClassName="activeLink">
        Контакты
      </NavLink>
    </nav>
  );
}
