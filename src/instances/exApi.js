// import qs from 'qs';
import axios from 'axios'
import { API_BASE_URI } from '../constants';

const exApi = axios.create({
  baseURL: API_BASE_URI
  // headers: {'Content-Type': 'application/json'}
  // transformResponse: [function (data) {
  //   console.dir(data)
  //   return data;
  // }],
})


export default exApi