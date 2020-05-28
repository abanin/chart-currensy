import getDay from './getDay';
import { OFFSET_DAYS } from '../constants';


function initDays() {
  const result = [];
  for (let i = OFFSET_DAYS; i > 0; i--) {
    result.push(getDay(Date.now(), i));
  }
  return result;
}
const days = initDays();


export default function getChartData(data) {
  return days.map((item, index) => {
    let value = {};
    if(data[index]) {
      const eur = data[index].rates["EUR"];
      const usd = data[index].rates["USD"];
      value = {eur: eur.toFixed(5),  usd: usd.toFixed(5), dateApi: data[index].date}
    }
    return {date: item, ...value};
  })
}