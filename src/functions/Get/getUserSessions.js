import axios from 'axios';

/**
 * Get user average sessions
 * @param { Function } setUserSessions from the useState hook
 * @param { String } userId
 * @return { (Array | Error) } Array [{day, sessionLength}, {day, sessionLength}, ...]
 */
function getUserSessions(setUserSessions, userId) {
  axios
    .get(`http://localhost:3000/user/${userId}/average-sessions`)
    .then((response) => {
      setUserSessions(response.data.data.sessions);
    })
    .catch((error) => {
      console.log('Error with getUserSessions =>', error);
      setUserSessions(undefined);
    });
}

export default getUserSessions;
