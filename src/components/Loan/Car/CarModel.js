import { useState } from "react";
// import * as marksOperations from "../../../redux/marks/marks-operations";
// import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

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

  // const dispatch = useDispatch();
  // const marks = useSelector((state) => state.marks.marks);
  const [cars, setCars] = useState("");

  // useEffect(() => {
  //   dispatch(marksOperations.fetchMarks());
  // }, [dispatch]);

  const handleChange = (event) => {
    setCars(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-select-model"
          select={carsModels}
          label="Выберите модель"
          value={cars}
          onChange={handleChange}
          variant="outlined"
        >
          {carsModels.map((model) => (
            <MenuItem key={model.label} value={model.label}>
              {model.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}
