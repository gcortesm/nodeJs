const derivative = (b, m) => {
    return b * Math.pow(m, b - 1);
};

console.log(derivative(3,-2));