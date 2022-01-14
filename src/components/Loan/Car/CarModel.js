import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import * as modelOperations from "../../../redux/models/model-operations";
import * as modelSelector from "../../../redux/selectors";
import * as autoActions from "../../../redux/autosCard/auto-actions";
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

export default function CarModels() {
  const classes = useStyles();
  const [markId, setMarkId] = useState("");
  const dispatch = useDispatch();
  const model = useSelector(modelSelector.getModelsId);
  const getCars = useSelector(modelSelector.getCars);

  useEffect(() => {
    dispatch(modelOperations.fetchModels(model));
  }, [dispatch, model]);

  useEffect(() => {
    dispatch(autoActions.getMarkValue(markId));
  }, [markId, dispatch]);

  const handleChange = (event) => {
    setMarkId(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-select-model"
          select={true}
          label="Выберите модель"
          value={markId}
          onChange={handleChange}
          variant="outlined"
        >
          {getCars.map((model) => (
            <MenuItem key={model.value} value={model.value}>
              {model.name}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}
