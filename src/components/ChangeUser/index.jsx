import PropTypes from 'prop-types';

import Refresh from '../../assets/refresh';
import changeUser from '../../functions/changeUser';

function ChangeUser({ userID, setUserID }) {
  return (
    <div id='change-user' onClick={() => changeUser(userID, setUserID)}>
      <Refresh />
    </div>
  );
}

ChangeUser.propTypes = {
  userID: PropTypes.string,
  setUserID: PropTypes.func,
};

export default ChangeUser;
