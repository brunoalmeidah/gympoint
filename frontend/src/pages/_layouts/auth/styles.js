import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #ee4d64;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 4px;

  padding: 50px 30px 50px 30px;
  h1 {
    color: #ee4d64;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 30px;

    span {
      margin-bottom: 10px;
      font: 14px 'Roboto', sans-serif;
      color: #444444;
      font-weight: bold;
    }
    input {
      background: #fff;
      width: 100%;
      border: 1px solid rgba(0, 0, 0, 0.3);
      border-radius: 4px;
      height: 35px;
      padding: 0 15px;
      color: #000;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(0, 0, 0, 0.3);
      }
    }

    button {
      width: 100%;
      height: 44px;
      background-color: #ee4d64;
      border: 0;
      border-radius: 4px;
      color: #fff;
      &:hover {
        background: ${darken(0.03, '#ee4d64')};
      }
    }
  }
`;
