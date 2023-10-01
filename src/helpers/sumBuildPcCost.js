export const subBuildPcCost = (parts) => {
  let total = 0;
  for (const iterator in parts) {
    const product = parts[iterator];
    if (product?.price) {
      total += product?.price;
    }
  }
  return total;
};
