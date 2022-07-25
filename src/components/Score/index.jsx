import PropTypes from 'prop-types';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

function Score({ score }) {
  const data = [{ value: score, fill: '#FF0101' }];

  // Push 7 object with value 1 in the data for fill the center of the RadialBarChart and define the max value
  for (let i = 0; i < 8; i++) {
    data.unshift({ value: 1, fill: 'white' });
  }

  return (
    <div className='score'>
      <h5>Score</h5>
      <div className='label'>
        <h3>{score * 100}%</h3>
        <h4>
          de votre
          <br />
          objectif
        </h4>
      </div>
      <ResponsiveContainer width='100%' height='100%'>
        <RadialBarChart
          margin={0}
          barCategoryGap={0}
          barGap={0}
          innerRadius='0%'
          outerRadius='100%'
          data={data}
        >
          <RadialBar dataKey='value' cornerRadius={50} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

Score.propTypes = {
  score: PropTypes.number,
};

export default Score;
