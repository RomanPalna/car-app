import { useState } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as infoActions from "../../redux/information/informarion-actions";

export default function TrusterPeople() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    person: "",
  });

  const dispatch = useDispatch();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    dispatch(infoActions.getTrusted(values));
  };

  return (
    <div className="trusted">
      <p className="trusted__title">Довереные лица</p>
      <Box component="form" validate autoComplete="off">
        <TextField
          value={values.name}
          onChange={handleChange("name")}
          required
          id="filled-name"
          label="Полное ФИО"
          variant="outlined"
          sx={{ m: 1, width: 550 }}
        />

        <TextField
          value={values.phone}
          onChange={handleChange("phone")}
          required
          id="filled-phone"
          label="Мобильный телефон"
          variant="outlined"
          sx={{ m: 1, width: 290 }}
        />

        <TextField
          value={values.person}
          onChange={handleChange("person")}
          required
          id="filled-workPhone"
          label="Кем приходится"
          variant="outlined"
          sx={{ m: 1, width: 290 }}
        />
      </Box>
    </div>
  );
}
