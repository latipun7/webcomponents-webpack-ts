import { FiMenu } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import type { FC } from 'react';

import styles from './menu.module.scss';

interface Props {}

const Menu: FC<Props> = () => {
  return (
    <nav id="nav-container" className={styles.navMenu}>
      <a href="/">
        <span id={styles.logo}>A la Dine</span>
      </a>

      <div className={styles['right-side']}>
        <FiMenu focusable="false" />
        <ul id={styles['nav-menu']}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/favorite">Favorite</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
