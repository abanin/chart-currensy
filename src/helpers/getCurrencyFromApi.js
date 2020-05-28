import exApi from '../instances/exApi';
import mapApiData from './mapApiData';
import { API_BASE_OPRIONS } from '../constants';


export default async function getCurrencyByDate(preparedDate, customParams={}) {
  const currentParams = {...API_BASE_OPRIONS, ...customParams};
  const response = await exApi.get(preparedDate, {params: currentParams});
  return mapApiData(response.data);
}