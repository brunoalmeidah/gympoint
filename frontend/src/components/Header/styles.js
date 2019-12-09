import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  height: 64px;
  border-bottom: 1px solid #dddddd;
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  nav {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      margin-left: 20px;
      color: #999999;
      &:hover {
        color: #444444;
      }
    }
  }

  aside {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    a {
      color: #de3b3b;
      &:hover {
        color: ${darken(0.1, '#DE3B3B')};
      }
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #dddddd;
  img {
    width: 45px;
    height: 23px;
    margin-right: 10px;
  }
  span {
    color: #ee4d64;
    font-weight: bold;
    font-size: 15px;
    margin-right: 30px;
  }
`;
