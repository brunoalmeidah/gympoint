import React from 'react';
import Card from '~/components/Card';
import history from '~/services/history';
import { Container, LinkBlue, LinkRed, Th, Td } from './styles';

export default function StudentList() {
  const handleRegister = () => {
    history.push('/students/new');
  };

  return (
    <Card
      title="Gerenciando alunos"
      width="1000px"
      handleRegister={handleRegister}
    >
      <Container>
        <table>
          <thead>
            <tr>
              <Th>NOME</Th>
              <Th>E-MAIL</Th>
              <Th align="center">IDADE</Th>
              <Th> </Th>
              <Th> </Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td width="400px">Bruno</Td>
              <Td>bruno@email.com</Td>
              <Td align="center">20</Td>
              <Td align="center" width="70px">
                <LinkBlue to="/">editar</LinkBlue>
              </Td>
              <Td align="center" width="70px">
                <LinkRed to="/">apagar</LinkRed>
              </Td>
            </tr>

            <tr>
              <Td>Bruno</Td>
              <Td>bruno@email.com</Td>
              <Td align="center">20</Td>
              <Td align="center" width="70px">
                <LinkBlue to="/">editar</LinkBlue>
              </Td>
              <Td align="center" width="70px">
                <LinkRed to="/">apagar</LinkRed>
              </Td>
            </tr>
          </tbody>
        </table>
      </Container>
    </Card>
  );
}
