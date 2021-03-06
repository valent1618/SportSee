import axios from 'axios';

import formatSubstrates from '../Format/formatSubstrates';

/**
 * Get general user information
 * @param { Function } setUser from the useState hook
 * @param { String } userId
 * @return { (Object | Error) } Object {
 *  id,
 *  userInfos: { firstName,lastName,age },
 *  todayScore,
 *  keyData: [{ name, unit, value, icon }, ...]
 *
 */
function getUser(setUser, userId) {
  axios
    .get(`http://localhost:3000/user/${userId}`)
    .then((response) => {
      response.data.data.keyData = formatSubstrates(response.data.data.keyData);
      setUser(response.data.data);
    })
    .catch((error) => {
      console.log('Error with getUser =>', error);
      setUser(undefined);
    });
}

export default getUser;
