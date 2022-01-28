export default (number: string | number): string => {
  return "Rs. " + number.toString().replace(/\B(?=(\d{2})*\d{3}(?!\d))/g, ",");
};
