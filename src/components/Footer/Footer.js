import Links from "./Links";
import Oferta from "./Oferta";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <footer className="footer">
      <Oferta />
      <Links />
      <Copyright />
    </footer>
  );
}
