import axios from 'axios';
import formatDay from '../Format/formatDay';

/**
 * Get user average sessions
 * @param { Function } setUserSessions from the useState hook
 * @param { String } userId
 * @returns { (Array.<{day: string, sessionLength: number}> | Error) }
 */
function getUserSessions(setUserSessions, userId) {
  axios
    .get(`http://localhost:3000/user/${userId}/average-sessions`)
    .then((response) => {
      let userSessions = response.data.data.sessions.map((session) => {
        return {
          ...session,
          day: formatDay(session.day),
        };
      });
      setUserSessions(userSessions);
    })
    .catch((error) => {
      console.log('Error with getUserSessions =>', error);
      setUserSessions(undefined);
    });
}

export default getUserSessions;
