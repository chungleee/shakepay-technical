export const calcBalance = (data) => {
  // 1. sum up credits and debits
  // 2. credit minus debit
  const credits = data
    .filter((item) => {
      return item.direction === "credit";
    })
    .reduce((acc, current) => {
      return acc + current.amount;
    }, 0);

  const debits = data
    .filter((item) => {
      return item.direction === "debit";
    })
    .reduce((acc, current) => {
      return acc + current.amount;
    }, 0);

  return credits - debits;
};
