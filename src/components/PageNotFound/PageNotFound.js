import { Link } from "react-router-dom";
import pageNotFound from "../../images/pageNotFound.gif";

export default function PageNotFound() {
  return (
    <>
      <img alt="page not found" src={pageNotFound}></img>;
      <Link to="/loan">Let's go to car loan</Link>
    </>
  );
}
