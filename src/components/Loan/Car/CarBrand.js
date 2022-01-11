import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { marksOperations } from "../../../redux/marks";
import * as marksSelector from "../../../redux/selectors";
import { getMarkIdByModelValue } from "../../../redux/models/models-actions";
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
  const [modelId, setModelId] = useState("");

  const dispatch = useDispatch();
  const modelsArr = useSelector(marksSelector.getModels);

  console.log("marks Brand", modelsArr);
  console.log("mark id Brand", modelId);

  useEffect(() => {
    dispatch(marksOperations.fetchMarks());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getMarkIdByModelValue(modelId));
  }, [dispatch, modelId]);

  const handleChange = (event) => {
    setModelId(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-select-brand"
          select
          label="Выберите авто"
          value={modelId}
          onChange={handleChange}
          variant="outlined"
        >
          {modelsArr.map((mark) => (
            <MenuItem key={mark.value} value={mark.value}>
              {mark.name}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}
