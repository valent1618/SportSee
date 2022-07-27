import axios from 'axios';

import pathData from './pathData';
import formatDate from '../Format/formatDate';

/**
 * Get user activity
 * @param { Function } setUserActivity from the useState hook
 * @param { String } userId
 * @returns { (Array.<{day: string, kilogram: number, calories: number}> | Error) }
 */
function getUserActivity(setUserActivity, userId) {
  axios
    .get(pathData('activity', userId))
    .then((response) => {
      let userActivity = response.data.data.sessions.map((session) => {
        return {
          ...session,
          day: formatDate(session.day),
        };
      });
      setUserActivity(userActivity);
    })
    .catch((error) => {
      console.log('Error with getUserActivity =>', error);
      setUserActivity(undefined);
    });
}

export default getUserActivity;
