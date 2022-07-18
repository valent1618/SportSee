import { useState, useEffect } from 'react';

import USER_ID from '../../data/user';
import getUserSessions from '../../functions/Get/getUserSessions';
import Loader from '../Loader';

function Sessions() {
  let [userSessions, setUserSessions] = useState('loading');

  useEffect(() => {
    getUserSessions(setUserSessions, USER_ID);
  }, []);

  if (userSessions === 'loading') {
    return (
      <div className='sessions'>
        <Loader />
      </div>
    );
  } else if (userSessions === undefined) {
    return (
      <div className='sessions'>
        <h2>Nous ne trouvons pas l'activité...</h2>
      </div>
    );
  } else {
    return (
      <div className='sessions'>
        <h1>SESSIONS</h1>
      </div>
    );
  }
}

export default Sessions;
