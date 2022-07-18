import axios from 'axios';

/**
 * Get user performance
 * @param { Function } setUserPerformance from the useState hook
 * @param { String } userId
 * @return { (Object | Error) } Object {
 *  userId,
 *  kind: {1, 2, 3, 4, 5, 6},
 *  data: [{value, kind}, {value, kind}, ...]
 * }
 */
function getUserPerformance(setUserPerformance, userId) {
  axios
    .get(`http://localhost:3000/user/${userId}/performance`)
    .then((response) => {
      setUserPerformance(response.data.data);
    })
    .catch((error) => {
      console.log('Error with getUserPerformance =>', error);
      setUserPerformance(undefined);
    });
}

export default getUserPerformance;
