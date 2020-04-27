module.exports = function reverse (n) {
  const reversedNum = Math.abs(parseFloat(n.toString().split('').reverse().join('')) * Math.sign(n));
  return reversedNum;
}
