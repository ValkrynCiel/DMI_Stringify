import styled from 'styled-components';
import Arrow, { moveArrow } from './Arrow';

export default styled.button`
  height: 140px;
  width: 140px;
  border-radius: 50%;
  background-color: teal;
  border: black solid 3px;
  position: absolute;
  top: calc((200px - 140px) / 2);
  right: calc(((200px - 140px) / 2) + 15px);
  &:hover {
    cursor: pointer;
  }
  &:hover ${Arrow} {
    margin-left: 10px;
    animation: ${moveArrow} 1.5s ease-out infinite;
    border-color: white;
  }
  &:focus {
    outline: none;
  }
`;
