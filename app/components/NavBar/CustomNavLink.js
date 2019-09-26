import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default styled(NavLink)`
  margin-top: 10px;
  margin-right: 50px;
  font-size: 25px;
  display: block;
  font-family: 'Josefin Sans', sans-serif;
  &:after {
    bottom: -3px;
    display: block;
    content: '';
    border-bottom: solid 3px #019fb6;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;
