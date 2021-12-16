import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const carsBrands = [
  {
    label: "Mersedes-Benz",
  },
  {
    label: "BMW",
  },
  {
    label: "Honda",
  },
  {
    label: "Hyundai",
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

export default function CarBrand() {
  const classes = useStyles();
  const [cars, setCars] = React.useState("BMW");

  const handleChange = (event) => {
    setCars(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-select-brand"
          select
          label="Выберите авто"
          value={cars}
          onChange={handleChange}
          variant="outlined"
        >
          {carsBrands.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}
