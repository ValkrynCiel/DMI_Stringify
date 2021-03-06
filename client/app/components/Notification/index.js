import styled from 'styled-components';

export default styled.div`
  position: absolute;
  z-index: 10;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 80px;
  border: 1px solid #33658a;
  border-radius: 10px;
  background-color: ${props => (props.error ? '#EB5160' : 'teal')};
  color: white;
  font-size: 20px;
  display: flex;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  p {
    margin: auto;
    width: 95%;
  }
`;
