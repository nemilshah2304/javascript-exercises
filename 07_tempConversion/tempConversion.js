const ftoc = function(far) {
  return Math.round(((far -32)*5/9)*10)/10;
};

const ctof = function(cels) {
  return Math.round(((1.8*cels) + 32)*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
