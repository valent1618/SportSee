import { NavLink } from 'react-router-dom';

import Logo from '../../assets/logo';
import Yoga from '../../assets/sport-icons/yoga';
import Swimming from '../../assets/sport-icons/swimming';
import Bike from '../../assets/sport-icons/bike';
import BodyBuilding from '../../assets/sport-icons/bodybuilding';

export function HorizontalHeader() {
  return (
    <header className='navigation horizontal'>
      <div className='logo'>
        <Logo />
        <h2>SportSee</h2>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink exact='true' to='/SportSee/'>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to='/SportSee/profile'>Profil</NavLink>
          </li>
          <li>
            <NavLink to='/SportSee/setting'>Réglage</NavLink>
          </li>
          <li>
            <NavLink to='/SportSee/community'>Communauté</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export function VerticalHeader() {
  return (
    <div className='navigation vertical'>
      <nav>
        <ul>
          <li>
            <NavLink activeclassname='active' to='/SportSee/yoga'>
              <Yoga />
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname='active' to='/SportSee/swimming'>
              <Swimming />
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname='active' to='/SportSee/bike'>
              <Bike />
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname='active' to='/SportSee/bodybuilding'>
              <BodyBuilding />
            </NavLink>
          </li>
        </ul>
      </nav>
      <h5>Copiryght, SportSee 2020</h5>
    </div>
  );
}
