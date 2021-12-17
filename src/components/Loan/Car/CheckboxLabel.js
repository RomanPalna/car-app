import { useState } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

export default function CheckboxLabels({ onHandleChange }) {
  const [state, setState] = useState(false);

  const handleChange = (event) => {
    setState(!state);
    onHandleChange(!state);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            className="carCheckbox"
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
            color="primary"
            size="small"
            icon={<CircleOutlinedIcon style={{ fill: "#464646" }} />}
            checkedIcon={<CheckCircleIcon style={{ fill: "#07B1FD" }} />}
          />
        }
        className="FormControlLabel"
        labelPlacement="start"
        label="Выбрано это авто"
      />
    </FormGroup>
  );
}
