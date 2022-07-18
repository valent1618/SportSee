import { useState, useEffect } from 'react';

import USER_ID from '../../data/user';
import getUser from '../../functions/Get/getUser';
import Loader from '../../components/Loader';
import Activity from '../../components/Activity';
import Sessions from '../../components/Sessions';
import Performance from '../../components/Performance';
import Score from '../../components/Score';
import Substrate from '../../components/Substrate';

import Error from '../404';

function Dashboard() {
  let [user, setUser] = useState('loading');

  useEffect(() => {
    getUser(setUser, USER_ID);
  }, []);

  if (user === 'loading') {
    return (
      <main id='Dashboard'>
        <Loader />
      </main>
    );
  } else if (user === undefined) {
    return <Error error='user' />;
  } else {
    return (
      <main id='Dashboard'>
        <div className='header'>
          <h1>
            Bonjour <span>{user.userInfos.firstName}</span>
          </h1>
          <p>
            {user.todayScore > 0.2
              ? `Félicitation ! Vous avez explosé votre objectif 👏`
              : `Encore un peu d'effort ! Vous atteindrez bientôt votre objectif 💪`}
          </p>
        </div>
        <section className='stat'>
          <div className='chart'>
            <Activity />
            <Sessions />
            <Performance />
            <Score score={user.todayScore} />
          </div>
          <div className='substrates'>
            {user.keyData.map((substrate) => (
              <Substrate substrate={substrate} key={substrate.name} />
            ))}
          </div>
        </section>
      </main>
    );
  }
}

export default Dashboard;
