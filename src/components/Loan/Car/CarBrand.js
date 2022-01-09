import { useEffect, useState } from "react";
import * as marksOperations from "../../../redux/marks/marks-operations";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

// const carsBrands = [
//   {
//     label: "Mersedes-Benz",
//   },
//   {
//     label: "BMW",
//   },
//   {
//     label: "Honda",
//   },
//   {
//     label: "Hyundai",
//   },
// ];

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
  const marks = useSelector((state) => state.marks.marks);

  useEffect(() => {
    dispatch(marksOperations.fetchMarks());
  }, [dispatch]);

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
            <MenuItem key={mark.value} value={mark.name}>
              {mark.name}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}
