import styled from 'styled-components';

export default styled.input`
  height: 100px;
  width: 600px;
  border-top-left-radius: 60px;
  border-bottom-left-radius: 60px;
  position: absolute;
  top: calc((200px - 100px) / 2);
  left: calc((200px - 100px) / 2);
  border: none;
  padding: 30px 60px;
  font-size: 30px;
  color: teal;
  background-color: lemonchiffon;
  &:focus {
    outline: none;
    background: lightgrey;
    border: 2px solid grey;
  }
`;
