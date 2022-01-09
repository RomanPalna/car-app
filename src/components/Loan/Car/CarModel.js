import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

import * as api from "../../../autoRiaAPI";

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
  const [cars, setCars] = React.useState("");
  const [models, setModels] = React.useState([]);

  useEffect(() => {
    api.carApi().then((res) => setModels(res));
    models.map((cars) => setCars(cars));
  }, [models]);
  console.log(cars);

  const handleChange = (event) => {
    setCars(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-select-model"
          select
          label="Выберите модель"
          value={cars}
          onChange={handleChange}
          variant="outlined"
        >
          {cars
            ? carsModels.map((model) => (
                <MenuItem key={model.title} value={model.title}>
                  {model.title}
                </MenuItem>
              ))
            : ""}
        </TextField>
      </div>
    </form>
  );
}
