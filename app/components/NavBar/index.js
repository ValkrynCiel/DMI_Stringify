import React from 'react';
import styled from 'styled-components'

import NavLink from './NavLink';
import NavLinkGroup from './NavLinkGroup';
import HomeLink from './HomeLink';

const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lightblue;
  position: fixed;
  height: 75px;
  width: 100%;
  box-shadow: 0px 5px 5px rgba(200, 200, 200, 0.6);
  a {
    text-decoration: none;
    color: blue;
    &:visited {
      color: blue;
    }
    &:hover {
      cursor: pointer;
    }
  }
`;
export default function NavBar() {
  return (
    <NavBarWrapper>
      <HomeLink to="/" />
      <NavLinkGroup>
        <NavLink to="/words">Word List</NavLink>
        <NavLink to="/words/new">Add a word</NavLink>
      </NavLinkGroup>
    </NavBarWrapper>
  );
}
