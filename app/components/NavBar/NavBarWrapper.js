import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: red;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
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