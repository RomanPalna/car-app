import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as calculatorActions from "../../../redux/calculator/calculator-action";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

export default function CheckboxLabels({ price, cheked, onHandleSelect }) {
  const dispatch = useDispatch();

  if (cheked) {
    console.log(price);
  }
  useEffect(() => {
    if (cheked) {
      dispatch(calculatorActions.getFirstinstallment(price));
    }
  }, [cheked, dispatch, price]);

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            className="carCheckbox"
            checked={cheked}
            onChange={() => onHandleSelect()}
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
