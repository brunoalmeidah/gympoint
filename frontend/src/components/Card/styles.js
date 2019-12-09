import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: ${props => props.width};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;

  h1 {
    color: #444444;
  }

  input {
    margin-left: 10px;
    border-radius: 4px;
    border: 1px solid #cccccc;

    padding: 7px 20px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const Body = styled.div`
  background-color: #fff;
  border-radius: 4px;
`;

export const Button = styled.button.attrs(props => ({
  type: props.type,
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.primary ? '#EE4D64' : '#CCCCCC')};
  border: 0;
  padding: 7px 20px;
  border-radius: 4px;
  margin-left: 10px;
  color: #fff;
  font-weight: bold;

  svg {
    font-size: 20px;
    margin-right: 7px;
  }
`;

export const LinkBack = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #cccccc;
  padding: 7px 20px;
  border-radius: 4px;
  margin-left: 10px;
  color: #fff;
  font-weight: bold;
  svg {
    font-size: 20px;
    margin-right: 7px;
  }
`;
