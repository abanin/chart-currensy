import prepareDate from "./prepareDate";

import { subDays } from 'date-fns';

export default function getDay(startDay, offset) {
  return prepareDate(subDays(startDay, offset))
}