export const Rupiah = text => {
  return text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};
