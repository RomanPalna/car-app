//state of marks autos
export const getModels = (state) => state.marks.marks;

//state of models autos
export const getCars = (state) => state.models.models;

//state of cars Models ID
export const getMarkId = (state) => state.autos.markId;

//state of cars Marks ID
export const getModelsId = (state) => state.models.value;

//state of car cards
export const getCarCards = (state) => state.autos.autos;

//state of percentage slider
export const getPercentage = (state) => state.calc.percentage;

//state of months slider
export const getMonths = (state) => state.calc.months;

//state of firstinstallment  (перший внесок)
export const getFirstinstallment = (state) => state.calc.firstinstallment.price;

//state of price for every month
export const getPriceForEveryMonths = (state) => state.calc.priceForEveryMonths;
