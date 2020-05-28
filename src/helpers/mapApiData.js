export default function mapApiData(data={}) {
  const cloneRates = {...data.rates};
  for(const key in cloneRates) {
    cloneRates[key] = 1/cloneRates[key];
  }
  
  return {...data, rates: cloneRates};
}