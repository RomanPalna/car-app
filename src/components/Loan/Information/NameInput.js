import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function FormPropsTextFields() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    workPhone: "",
    location: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Box component="form" noValidate autoComplete="off">
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
        value={values.workPhone}
        onChange={handleChange("workPhone")}
        required
        id="filled-workPhone"
        label="Рабочий телефон"
        variant="outlined"
        sx={{ m: 1, width: 290 }}
      />

      <TextField
        value={values.location}
        onChange={handleChange("location")}
        required
        id="filled-location"
        label="Адрес фактического проживания"
        variant="outlined"
        sx={{ m: 1, width: 1162 }}
      />
    </Box>
  );
}
