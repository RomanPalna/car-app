import { useState } from "react";
import dropdown from "../../images/dropdown.png";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Dropdown = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <div className="dropdown">
      <button type="button" onClick={toggle} color="success">
        {visible ? (
          <CloseOutlinedIcon style={{ fill: "#464646" }} />
        ) : (
          <img src={dropdown} alt="dropdown menu" />
        )}
      </button>

      {visible && <div>{children}</div>}
    </div>
  );
};

export default Dropdown;
