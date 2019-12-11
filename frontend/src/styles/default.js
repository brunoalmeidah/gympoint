import styled from 'styled-components';
import { Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

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

export const Td = styled.td`
  text-align: ${props => (props.align ? props.align : 'left')};
  width: ${props => props.width};
  border-bottom: 1px solid #cccccc;
  padding-bottom: 15px;
  padding-top: 15px;
  color: #666666;
  font-size: 16px;
`;
export const Th = styled.th`
  text-align: ${props => (props.align ? props.align : 'left')};
  width: ${props => props.width};
  padding-bottom: 15px;
  padding-top: 15px;
  font-weight: bold;
  color: #444444;
  font-size: 16px;
`;

export const LinkBlue = styled(Link)`
  color: #4d85ee;
`;
export const LinkRed = styled(Link)`
  color: #de3b3b;
`;
