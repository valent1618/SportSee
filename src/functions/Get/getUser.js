import axios from 'axios';

import pathData from './pathData';
import formatSubstrates from '../Format/formatSubstrates';

/**
 * Get general user information
 * @param { Function } setUser from the useState hook
 * @param { String } userId
 * @returns { ({id: number, userInfos: {firstName: string, lastName: string, age: number}, todayScore: number, keyData: {name: string, unit: string, value: number, icon: JSX.Element}} | Error) }
 */
function getUser(setUser, userId) {
  axios
    .get(pathData('user', userId))
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
