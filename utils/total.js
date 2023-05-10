export const getTotal = (cart) => {
  const total = cart
    .map((item) => item.price)
    .reduce((accumulator, current) => accumulator + current, 0);
  return total;
};
