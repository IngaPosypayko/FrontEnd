import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Menu = props => (
  <div>
    <ul className="menu">
      <li className="menu__item">
        <Link className="menu__link" to="/">Project</Link>
      </li>
      <li className="menu__item">
        <Link className="menu__link" to="/chat">Chat</Link>
      </li>
      <li className="menu__item">
        <Link className="menu__link" to="/backlog">Backlog</Link>
      </li>
      <li className="menu__item">
        <Link className="menu__link" to="/calendar">Calendar</Link>
      </li>
      <li className="menu__item">
        <Link className="menu__link" to="/board">Board</Link>
      </li>
      <li className="menu__item">
        <Link className="menu__link" to="/retro">Retro</Link>
      </li>
    </ul>
  </div>
);

export default Menu;
