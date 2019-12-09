import styled from 'styled-components';
import { Input } from '@rocketseat/unform';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Col = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const InputDefault = styled(Input)`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #cccccc;
  color: #999999;
  font-size: 16px;
`;

export const Label = styled.span`
  font-weight: bold;
  size: 14px;
  color: #444444;
  margin-bottom: 5px;
`;
