const CelsiusConversion = (K) => {
  const C = (K - 273.15).toFixed(2);
  return C;
};

export default CelsiusConversion;
