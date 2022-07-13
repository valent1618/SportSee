import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Ghost from '../../assets/ghost';
import NoUser from '../../assets/noUser';

function Error({ error = 'page' }) {
  return (
    <main id='Error'>
      {error === 'page' ? <Ghost /> : <NoUser />}
      <h1>
        Error <b>404</b>
      </h1>
      <h2>
        {error === 'page'
          ? `Oups! La page que vous demandez n'existe pas.`
          : `L'utilisateur ne semble pas exister...`}
      </h2>
      <Link to='/SportSee/'>Retourner à l'accueil</Link>
    </main>
  );
}

Error.propTypes = {
  error: PropTypes.oneOf(['page', 'user']),
};

export default Error;
