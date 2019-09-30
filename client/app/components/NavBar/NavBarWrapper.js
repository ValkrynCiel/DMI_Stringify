import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eb5160;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 75px;
  width: 100%;
  box-shadow: 0px 5px 5px rgba(135, 84, 89, 0.3);
  a {
    text-decoration: none;
    color: #071013;
    &:visited {
      color: #071013;
    }
    &:hover {
      cursor: pointer;
    }
  }
`;
