import React from 'react';

import NavBarWrapper from './NavBarWrapper';
import CustomNavLink from './CustomNavLink';
import NavLinkGroup from './NavLinkGroup';
import HomeLink from './HomeLink';
import HomeImage from './HomeImage';

export default function NavBar() {
  const activeStyle = {
    color: '#028080',
  };

  return (
    <NavBarWrapper>
      <HomeLink to="/">
        <HomeImage>
          <p>S</p>
        </HomeImage>
      </HomeLink>
      <NavLinkGroup>
        <CustomNavLink exact to="/strings" activeStyle={activeStyle}>
          String List
        </CustomNavLink>
        <CustomNavLink exact to="/strings/new" activeStyle={activeStyle}>
          Add a string
        </CustomNavLink>
      </NavLinkGroup>
    </NavBarWrapper>
  );
}
