import { Link } from "react-router-dom";
import pageNotFound from "../../images/pageNotFound.gif";

export default function PageNotFound() {
  return (
    <div className="pageNotFound">
      <img alt="page not found" src={pageNotFound}></img>
      <Link className="shine-button" to="/loan">
        Let's go to car loan
      </Link>
    </div>
  );
}
