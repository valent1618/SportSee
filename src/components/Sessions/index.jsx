import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from 'recharts';

import getUserSessions from '../../functions/Get/getUserSessions';
import Loader from '../Loader';

// Create a custom tooltip
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className='custom-tooltip'>
        <p className='label'>{payload[0].value + ' min'}</p>
      </div>
    );
  }

  return null;
};

// Create a custom cursor
const CustomizedCursor = ({ width, points }) => {
  return (
    <Rectangle
      fill='rgba(0,0,0,0.1)'
      width={width}
      height={width}
      x={points[0].x}
    />
  );
};

function Sessions({ userID }) {
  let [userSessions, setUserSessions] = useState('loading');

  useEffect(() => {
    getUserSessions(setUserSessions, userID);
  }, [userID]);

  if (userSessions === 'loading') {
    return (
      <div className='sessions'>
        <Loader />
      </div>
    );
  } else if (userSessions === undefined) {
    return (
      <div className='sessions error'>
        <h2>Nous ne trouvons plus votre durée moyenne des sessions...</h2>
      </div>
    );
  } else {
    return (
      <div className='sessions'>
        <h5>Durée moyenne des sessions</h5>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart data={userSessions} margin={{ bottom: 15 }}>
            <XAxis
              dataKey='day'
              axisLine={false}
              tickLine={false}
              padding={{
                left: 20,
                right: 20,
              }}
            />
            <YAxis
              dataKey='sessionLength'
              hide={true}
              domain={['dataMin - 20', 'dataMax + 50']}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={<CustomizedCursor />}
            />
            <defs>
              <linearGradient id='gradient'>
                <stop offset='0%' stopColor='white' stopOpacity={0.4} />
                <stop offset='100%' stopColor='white' />
              </linearGradient>
            </defs>
            <Line
              type='natural'
              dataKey='sessionLength'
              stroke='url(#gradient)'
              strokeWidth={2}
              dot={false}
              activeDot={{
                stroke: 'rgba(255,255,255,0.2)',
                strokeWidth: 10,
                r: 5,
                fill: 'white',
              }}
              connectNulls={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

Sessions.propTypes = {
  userID: PropTypes.string,
};

export default Sessions;
