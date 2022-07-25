import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import getUserActivity from '../../functions/Get/getUserActivity';
import Loader from '../Loader';

// Create a custom tooltip
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className='custom-tooltip'>
        <p className='label'>
          {payload[0].value + (payload[0].name === 'kilogram' ? 'kg' : 'kCal')}
        </p>
        <p className='label'>
          {payload[1].value + (payload[1].name === 'kilogram' ? 'kg' : 'kCal')}
        </p>
      </div>
    );
  }

  return null;
};

function Activity({ userID }) {
  let [userActivity, setUserActivity] = useState('loading');

  useEffect(() => {
    getUserActivity(setUserActivity, userID);
  }, [userID]);

  if (userActivity === 'loading') {
    return (
      <div className='activity'>
        <Loader />
      </div>
    );
  } else if (userActivity === undefined) {
    return (
      <div className='activity error'>
        <h2>Nous ne trouvons plus votre activité...</h2>
      </div>
    );
  } else {
    return (
      <div className='activity'>
        <div className='header'>
          <h5>Activité quotidienne</h5>
          <div className='legends-container'>
            <div className='legend'>
              <div className='dot' />
              <p>Poids (kg)</p>
            </div>
            <div className='legend'>
              <div className='dot dot-calories' />
              <p>Calories brûlées (kCal)</p>
            </div>
          </div>
        </div>
        <ResponsiveContainer width='100%' height='75%'>
          <BarChart data={userActivity} barGap={8} barSize={7}>
            <XAxis
              dataKey='day'
              axisLine={false}
              tickLine={false}
              tickMargin={15}
            />
            <YAxis
              dataKey='kilogram'
              yAxisId='right'
              orientation='right'
              domain={['dataMin - 2', 'dataMax + 2']}
              axisLine={false}
              tickLine={false}
              tickMargin={15}
            />
            <YAxis dataKey='calories' yAxisId='left' hide={true} />
            <Tooltip content={<CustomTooltip />} />
            <CartesianGrid vertical={false} strokeDasharray='2' />
            <Bar
              yAxisId='right'
              dataKey='kilogram'
              fill={'#282D30'}
              radius={[5, 5, 0, 0]}
            />
            <Bar
              yAxisId='left'
              dataKey='calories'
              fill={'#ff0101'}
              radius={[5, 5, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

Activity.propTypes = {
  userID: PropTypes.string,
};

export default Activity;
