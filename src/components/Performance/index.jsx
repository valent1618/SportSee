import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

import getUserPerformance from '../../functions/Get/getUserPerformance';
import Loader from '../Loader';

function Performance({ userID }) {
  let [userPerformance, setUserPerformance] = useState('loading');

  useEffect(() => {
    getUserPerformance(setUserPerformance, userID);
  }, [userID]);

  if (userPerformance === 'loading') {
    return (
      <div className='performance'>
        <Loader />
      </div>
    );
  } else if (userPerformance === undefined) {
    return (
      <div className='performance error'>
        <h2>Nous ne trouvons plus votre performance...</h2>
      </div>
    );
  } else {
    return (
      <div className='performance'>
        <ResponsiveContainer width='100%' height='100%'>
          <RadarChart
            data={userPerformance}
            margin={{ top: 15, right: 15, bottom: 15, left: 15 }}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey='kind' dy={3} />
            <PolarRadiusAxis axisLine={false} tick={false} />
            <Radar
              dataKey='value'
              dot={false}
              fill='#FF0101'
              fillOpacity={0.7}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

Performance.propTypes = {
  userID: PropTypes.string,
};

export default Performance;
