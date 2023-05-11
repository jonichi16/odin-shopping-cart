export const priceFormatter = (price) =>
  price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const getTotal = (cart) => {
  const total = cart
    .map((item) => item.price * item.qty)
    .reduce((accumulator, current) => accumulator + current, 0);
  return priceFormatter(total);
};
