import { useState, useEffect } from 'react';

import getUser from '../../functions/Get/getUser';
import Loader from '../../components/Loader';
import ChangeUser from '../../components/ChangeUser';
import Activity from '../../components/Activity';
import Sessions from '../../components/Sessions';
import Performance from '../../components/Performance';
import Score from '../../components/Score';
import Substrate from '../../components/Substrate';

import Error from '../404';

function Dashboard() {
  let [userID, setUserID] = useState('12');
  let [user, setUser] = useState('loading');

  useEffect(() => {
    getUser(setUser, userID);
  }, [userID]);

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
        <ChangeUser userID={userID} setUserID={setUserID} />
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
            <Activity userID={userID} />
            <Sessions userID={userID} />
            <Performance userID={userID} />
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
