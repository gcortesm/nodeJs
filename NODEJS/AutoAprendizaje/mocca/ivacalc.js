const calcularIva = (productPrice, iva) => {
  return (productPrice * iva)/100;
};

module.exports = calcularIva;