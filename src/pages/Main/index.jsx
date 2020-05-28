import React, { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';
import Chart from '../../components/Chart';
import Table from '../../components/Table';
import getCurrencyByDate from '../../helpers/getCurrencyFromApi';
import getDay from '../../helpers/getDay'
import { OFFSET_DAYS } from '../../constants';


export default function MainPage(props) {
  const [state, setState] = useState({data: [], offset: OFFSET_DAYS});
  const [dimensions, setDimensions] = React.useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  });

  useEffect(() => {
    const timerId = setTimeout(async () => {
      if(state.offset >= 0)  {
        const day = getDay(Date.now(), state.offset)
        const newData = await getCurrencyByDate(day)
        const offset = state.offset - 1;
        setState({data: [...state.data, newData], offset});
      } else {
        clearTimeout(timerId);
      }
    }, 1000);


    return () => {
      clearTimeout(timerId);
    }
  }, [state]);

  useEffect(() => {
    const debounceHandleResize = debounce(handleResize, 100);
    window.addEventListener('resize', debounceHandleResize)
    
    return () => window.removeEventListener('resize', debounceHandleResize)
  }, [])


  function handleResize() {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth
    })
  }
  
  return (
    <div>
      <Chart data={state.data} dimensions={dimensions} />
      <Table data={state.data} />
    </div>
  )
}