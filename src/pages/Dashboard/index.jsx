import { useState, useEffect } from 'react';

import USER_ID from '../../data/user';
import fetchUser from '../../functions/User.js/fetchUser';
import Loader from '../Loader';
import Error from '../404';

function Dashboard() {
  let [user, setUser] = useState('loading');

  useEffect(() => {
    fetchUser(setUser, USER_ID);
  }, []);

  if (user === 'loading') {
    return <Loader />;
  } else if (user === undefined) {
    return <Error error='user' />;
  } else {
    return (
      <main id='Dashboard'>
        <h1>
          Bonjour <span>{user.firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </main>
    );
  }
}

export default Dashboard;
