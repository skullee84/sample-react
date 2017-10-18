import React from 'react';

import { NavLink } from 'react-router-dom';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        <li>
          <NavLink to="/home" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/recruit" activeClassName="active">Recruit</NavLink>
        </li>
      </ul>
    );
  }
}
