import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

function valueFormst(value) {
  let scaledValue = value;

  if (scaledValue < 12) {
    return `${scaledValue} months`;
  }
  if (scaledValue >= 12) {
    const months = scaledValue % 12;
    const years = (scaledValue - (scaledValue % 12)) / 12;

    return `${years} years ${months} months`;
  }
}

function calculateValue(value) {
  return value + 1;
}

export default function LoanTermSlider() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 500 }}>
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
