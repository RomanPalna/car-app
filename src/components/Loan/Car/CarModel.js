import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import * as modelOperations from "../../../redux/models/model-operations";
import * as modelSelector from "../../../redux/models/model-selector";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { marks } from "../../../autoRiaAPI";

const carsModels = [
  {
    label: "X5",
  },
  {
    label: "M2",
  },
  {
    label: "E-Class 200",
  },
  {
    label: "Pathfinder",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function CarModels() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const model = useSelector(modelSelector.getValue);
  const getCars = useSelector(modelSelector.getCars);

  const [cars, setCars] = useState("");

  useEffect(() => {
    if (!model) {
      return;
    }

    dispatch(modelOperations.fetchModels(model));
  }, [dispatch, model]);

  const handleChange = (event) => {
    setCars(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-select-model"
          select={true}
          label="Выберите модель"
          value={cars}
          onChange={handleChange}
          variant="outlined"
        >
          {getCars.map((model) => (
            <MenuItem key={model.value} value={model.name}>
              {model.name}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}
