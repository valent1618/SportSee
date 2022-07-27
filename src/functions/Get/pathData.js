/**
 *
 * @param { ('user' | 'activity' | 'performance' | 'sessions') } type
 * @param { String } userId
 * @returns { String } path to get the data
 */
function pathData(type, userId) {
  const mocked = false;

  if (mocked) {
    let path = `/SportSee/mockData/${userId}/`;

    switch (type) {
      case 'user':
        path += 'user.json';
        break;
      case 'activity':
        path += 'activity.json';
        break;
      case 'performance':
        path += 'performance.json';
        break;
      case 'sessions':
        path += 'average-sessions.json';
        break;
      default:
        console.log('Type undefined');
    }

    return path;
  } else {
    let path = `http://localhost:3000/user/${userId}/`;

    switch (type) {
      case 'user':
        // Do nothing
        break;
      case 'activity':
        path += 'activity';
        break;
      case 'performance':
        path += 'performance';
        break;
      case 'sessions':
        path += 'average-sessions';
        break;
      default:
        console.log('Type undefined');
    }

    return path;
  }
}

export default pathData;
