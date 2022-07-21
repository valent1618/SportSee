import axios from 'axios';
import formatPerformance from '../Format/formatPerformance';

/**
 * Get user performance
 * @param { Function } setUserPerformance from the useState hook
 * @param { String } userId
 * @return { (Object | Error) } Object {value, kind}
 */
function getUserPerformance(setUserPerformance, userId) {
  axios
    .get(`http://localhost:3000/user/${userId}/performance`)
    .then((response) => {
      setUserPerformance(formatPerformance(response.data.data));
    })
    .catch((error) => {
      console.log('Error with getUserPerformance =>', error);
      setUserPerformance(undefined);
    });
}

export default getUserPerformance;
