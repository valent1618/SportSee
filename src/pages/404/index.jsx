import { Link } from 'react-router-dom';

function Error() {
  return (
    <main id='Error'>
      <h1>
        Error <b>404</b>
      </h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to='/SportSee/'>Retourner sur le dashboard</Link>
    </main>
  );
}

export default Error;
