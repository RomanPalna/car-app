const calculator = (firstinstallment, months, percentage) => {
  const percent = 17 / 100;
  const credit = firstinstallment - (firstinstallment * percentage) / 100;

  const sum = (12 * credit + percent * credit * 12) / (12 * months);

  return sum;
};

export default calculator;
