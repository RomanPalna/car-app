const calculator = (firstinstallment, months, percentage) => {
  const percent = 17 / 100;
  const credit = firstinstallment - (firstinstallment * percentage) / 100;
  const sum =
    (credit * percent) / 12 / (1 - (1 / (1 + percent / 12)) ** (months - 1));

  return sum;
};

export default calculator;
