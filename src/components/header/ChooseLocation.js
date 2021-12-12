import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import iconLocation from "../../images/location.png";

const cities = [
  {
    label: "Хмельницкий",
  },
  {
    label: "Винница",
  },
  {
    label: "Львов",
  },
  {
    label: "Киев",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root .location-form": {
      margin: theme.spacing(1),
      width: "125",
    },
  },
}));

export default function ChooseLocation() {
  const classes = useStyles();
  const [location, setLoacation] = useState("Хмельницкий");

  const handleChange = (event) => {
    setLoacation(event.target.value);
  };

  return (
    <form
      id="header__form"
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <img alt="location icon" className="location__icon" src={iconLocation} />
      <div>
        <TextField
          id="standard-select-location"
          value={location}
          onChange={handleChange}
          select
          InputProps={{ disableUnderline: true }}
        >
          {cities.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}
