import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

function valueLabelFormat(value) {
  const units = ["Месяц", "Год"];

  let unitIndex = 0;
  let scaledValue = value;

  while (scaledValue >= 12 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 12;
  }

  return `${scaledValue} ${units[unitIndex]}`;
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
        {valueLabelFormat(calculateValue(value))}
      </Typography>
      <Slider
        value={value}
        min={0}
        step={1}
        max={96}
        scale={calculateValue}
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
    </Box>
  );
}
