import styled from 'styled-components';

export default styled.div`
  height: 125px;
  width: 300px;
  border-radius: 10px;
  background-color: ${props => (props.i % 2 === 1 ? 'orange' : 'green')};
  margin-top: 40px;
  font-size: 20px;
  display: flex;
  p {
    margin: auto;
  }
`;
