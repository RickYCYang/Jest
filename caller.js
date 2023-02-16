import { sumTwoNumsWrapper } from "./sumTwoNumsWrapper";

const caller = (num1, num2) => {
  console.log('do something start, num1, num2:', num1, num2);
  const result = sumTwoNumsWrapper(num1, num2);
  console.log('do something end, result:', result);
  return result;
}

export {caller}