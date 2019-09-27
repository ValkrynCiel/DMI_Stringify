import styled from 'styled-components';

export default styled.div`
  height: 125px;
  width: 300px;
  border-radius: 20px;
  background-color: ${props => (props.i % 2 === 1 ? 'teal' : '#33658A')};
  border-bottom: rebeccapurple solid 2px;
  font-size: 20px;
  box-shadow: 0px 10px 10px rgba(196, 149, 65, 1);
  display: flex;
  margin-top: 40px;
  text-align: center;
  user-select: none;
  overflow: hidden;
  p {
    overflow: hidden;
    color: white;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: auto;
    width: 80%;
  }
  &:hover p {
    text-overflow: clip;
    white-space: normal;
    overflow: visible;
    hyphens: auto;
  }
`;
