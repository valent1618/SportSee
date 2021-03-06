import axios from 'axios';
import formatDate from '../Format/formatDate';

/**
 * Get user activity
 * @param { Function } setUserActivity from the useState hook
 * @param { String } userId
 * @return { (Array | Error) } Array [{day, kilogram, calories}, {day, kilogram, calories}, ...]
 */
function getUserActivity(setUserActivity, userId) {
  axios
    .get(`http://localhost:3000/user/${userId}/activity`)
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
