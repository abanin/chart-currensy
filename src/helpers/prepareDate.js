import { format } from 'date-fns';
import { API_FORMAT_DAY } from '../constants';

export default function prepareDate(dateObject) {
  return format(dateObject, API_FORMAT_DAY);
}