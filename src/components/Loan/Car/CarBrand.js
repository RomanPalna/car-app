import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { marksOperations, marksSelector } from "../../../redux/marks";
import { getModelValue } from "../../../redux/models/models-actions";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

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
  const [cars, setCars] = useState("");

  const dispatch = useDispatch();
  const marks = useSelector(marksSelector.getMark);

  useEffect(() => {
    dispatch(marksOperations.fetchMarks());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getModelValue(cars));
  }, [cars, dispatch]);

  console.log(cars);

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
          {marks.map((mark) => (
            <MenuItem key={mark.value} value={mark.value}>
              {mark.name}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}
