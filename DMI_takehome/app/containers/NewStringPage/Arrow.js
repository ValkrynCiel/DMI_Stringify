import styled, { keyframes } from 'styled-components';

export const moveArrow = keyframes`
  0% {
    transform: translateX(-20px) rotate(45deg);
  }
  100% {
    transform: translateX(10px) rotate(45deg);
  }
`;

export default styled.div`
  border: solid black;
  border-width: 13px 13px 0 0;
  display: inline-block;
  padding: 16px;
  transform: rotate(45deg);
  margin: auto;
  border-radius: 8px;
  position: relative;
  left: -5px;
`;
