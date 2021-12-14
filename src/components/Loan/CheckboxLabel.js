import { useState } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function CheckboxLabels() {
  const [state, setState] = useState({
    checkedA: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
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
          />
        }
        className="FormGroup"
        labelPlacement="start"
        label="Выбрано это авто"
      />
    </FormGroup>
  );
}
