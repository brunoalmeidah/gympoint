import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  table {
    width: 100%;
    text-align: center;

    td {
      border-bottom: 1px solid #cccccc;
      padding-bottom: 15px;
      padding-top: 15px;
    }

    th {
      padding-bottom: 15px;
      padding-top: 15px;
    }
  }
`;

export const Td = styled.td`
  text-align: ${props => (props.align ? props.align : 'left')};
  width: ${props => props.width};
`;
export const Th = styled.th`
  text-align: ${props => (props.align ? props.align : 'left')};
  width: ${props => props.width};
`;

export const LinkBlue = styled(Link).attrs(props => ({
  to: props.to,
}))`
  color: #4d85ee;
`;
export const LinkRed = styled(Link)`
  color: #de3b3b;
`;
