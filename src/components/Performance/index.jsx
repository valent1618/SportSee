import { useState, useEffect } from 'react';

import USER_ID from '../../data/user';
import getUserPerformance from '../../functions/Get/getUserPerformance';
import Loader from '../Loader';

function Performance() {
  let [userPerformance, setUserPerformance] = useState('loading');

  useEffect(() => {
    getUserPerformance(setUserPerformance, USER_ID);
  }, []);

  if (userPerformance === 'loading') {
    return (
      <div className='performance'>
        <Loader />
      </div>
    );
  } else if (userPerformance === undefined) {
    return (
      <div className='performance'>
        <h2>Nous ne trouvons pas l'activité...</h2>
      </div>
    );
  } else {
    return (
      <div className='performance'>
        <h1>PERFORMANCE</h1>
      </div>
    );
  }
}

export default Performance;
