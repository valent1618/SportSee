import axios from 'axios';

import pathData from './pathData';
import formatPerformance from '../Format/formatPerformance';

/**
 * Get user performance
 * @param { Function } setUserPerformance from the useState hook
 * @param { String } userId
 * @returns { (Array.<{value: number, kind: string}> | Error) }
 */
function getUserPerformance(setUserPerformance, userId) {
  axios
    .get(pathData('performance', userId))
    .then((response) => {
      setUserPerformance(formatPerformance(response.data.data));
    })
    .catch((error) => {
      console.log('Error with getUserPerformance =>', error);
      setUserPerformance(undefined);
    });
}

export default getUserPerformance;
