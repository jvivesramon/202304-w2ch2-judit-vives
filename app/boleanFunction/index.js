export const strictEquals = (valueA, valueB) => {
  const equalResult = Object.is(valueA, valueB);

  if (isNaN(valueA) && !valueA) {
    if (isNaN(valueB) && !valueB) {
      return !equalResult;
    }
  }

  if (!isNaN(valueA) && !valueA) {
    if (!isNaN(valueB) && !valueB) {
      if (Object.is(valueA, valueB)) {
        return equalResult;
      }

      return !equalResult;
    }
  }

  return equalResult;
};
