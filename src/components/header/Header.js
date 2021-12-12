import Logo from "./Logo";
import Navigation from "./Navigation";
import ChooseLocation from "./ChooseLocation";
import Phone from "./Phone";
import Dropdown from "./Dropdown";

export default function Header() {
  return (
    <header>
      <Logo />
      <Navigation />
      <ChooseLocation />
      <Phone />

      <Dropdown>
        <Navigation />
      </Dropdown>
    </header>
  );
}
