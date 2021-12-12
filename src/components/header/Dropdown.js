import { useState } from "react";
import dropdown from "../../images/dropdown.png";
import close from "../../images/close.png";

const Dropdown = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <div className="dropdown">
      <button type="button" onClick={toggle} color="success">
        {visible ? (
          <img src={close} alt="dropdown menu" width="30" />
        ) : (
          <img src={dropdown} alt="dropdown menu" />
        )}
      </button>

      {visible && <div>{children}</div>}
    </div>
  );
};

export default Dropdown;
