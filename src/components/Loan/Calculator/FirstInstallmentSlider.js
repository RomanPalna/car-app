import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as calculatorActions from "../../../redux/calculator/calculator-action";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

function valueFormst(value) {
  let scaledValue = value;
  return `${scaledValue} %`;
}

function calculateValue(percentage) {
  return percentage + 1;
}

export default function FirstinstallmentSlider() {
  const [value, setValue] = useState(-1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculatorActions.getPercentage(calculateValue(value)));
  }, [dispatch, value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(calculateValue(value));

  return (
    <Box sx={{ width: 550 }}>
      <Typography id="non-linear-slider" gutterBottom>
        {valueFormst(calculateValue(value))}
      </Typography>
      <Slider
        value={value}
        min={-1}
        step={1}
        max={49}
        scale={calculateValue}
        getAriaValueText={valueFormst}
        valueLabelFormat={valueFormst}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
    </Box>
  );
}
