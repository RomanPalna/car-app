import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: 500 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-helperText" label="Полное ФИО" variant="filled" />
    </Box>
  );
}
