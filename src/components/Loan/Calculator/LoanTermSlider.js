import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as calculatorActions from "../../../redux/calculator/calculator-action";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

function valueFormst(value) {
  let scaledValue = value;

  if (scaledValue < 12) {
    return `${scaledValue} месяцев`;
  }
  if (scaledValue >= 12) {
    const months = scaledValue % 12;
    const years = (scaledValue - (scaledValue % 12)) / 12;

    return `${years} лет ${months} месяцев`;
  }
}

function calculateValue(value) {
  return value + 1;
}

export default function LoanTermSlider() {
  const [value, setValue] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculatorActions.getMonths(calculateValue(value)));
  }, [dispatch, value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 550 }}>
      <Typography id="non-linear-slider" gutterBottom>
        {valueFormst(calculateValue(value))}
      </Typography>
      <Slider
        value={value}
        min={0}
        step={1}
        max={59}
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
