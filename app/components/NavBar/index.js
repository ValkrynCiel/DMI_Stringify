import React from 'react';

import NavBarWrapper from './NavBarWrapper';
import CustomNavLink from './CustomNavLink';
import NavLinkGroup from './NavLinkGroup';
import HomeLink from './HomeLink';

export default function NavBar() {
  const activeStyle = {
    color: '#028080',
  };

  return (
    <NavBarWrapper>
      <HomeLink to="/" />
      <NavLinkGroup>
        <CustomNavLink exact to="/words" activeStyle={activeStyle}>
          Word List
        </CustomNavLink>
        <CustomNavLink exact to="/words/new" activeStyle={activeStyle}>
          Add a word
        </CustomNavLink>
      </NavLinkGroup>
    </NavBarWrapper>
  );
}
