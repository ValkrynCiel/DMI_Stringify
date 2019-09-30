import styled from 'styled-components';

export default styled.p`
  display: ${props => (props.show ? 'block' : 'none')};
  position: absolute;
  width: 60%;
  color: #EB5160;
  bottom: -40px;
  font-size: 18px;
  left: 50%;
  transform: translateX(-50%);
`;
