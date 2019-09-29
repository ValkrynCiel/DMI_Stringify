import styled from 'styled-components';

// BUG: absolute and fixed positioning break the notification and I don't know why
export default styled.div`
  position: absolute;
  z-index: 10;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 80px;
  border: 1px solid #33658A;
  border-radius: 10px;
  background-color: teal;
  color: white;
  font-size: 20px;
  display: flex;
  visibility: ${props => (props.note ? 'visible' : 'hidden')};
  p {
    margin: auto;
  }
`;
