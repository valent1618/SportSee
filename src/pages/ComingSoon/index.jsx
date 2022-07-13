import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Compass from '../../assets/compass';

function ComingSoon({ page }) {
  return (
    <main id='ComingSoon'>
      <Compass />
      <h1>
        En cours de <b>construction</b>...
      </h1>
      <h2>
        La page <b>{page}</b> sera bientôt prête,
        <br />
        revenez plus tard !
      </h2>
      <Link to='/SportSee/'>Voir mon dashboard</Link>
    </main>
  );
}

ComingSoon.propTypes = {
  page: PropTypes.oneOf([
    'Accueil',
    'Réglage',
    'Communauté',
    'Yoga',
    'Natation',
    'Vélo',
    'Musculation',
  ]),
};

export default ComingSoon;
