import React from 'react';
import { IconContext } from 'react-icons';
import { MdCheckCircle } from 'react-icons/md';
import Card from '~/components/Card';
import { Container } from './styles';
import { LinkBlue, LinkRed, Th, Td } from '~/styles/default';

export default function RegistrationList() {
  return (
    <Card
      title="Gerenciando matrículas"
      width="90%"
      registerTo="/registrations/new"
    >
      <Container>
        <table>
          <thead>
            <tr>
              <Th>ALUNO</Th>
              <Th align="center">PLANO</Th>
              <Th align="center">INÍCIO</Th>
              <Th align="center">TÉRMINO</Th>
              <Th align="center">ATIVA</Th>
              <Th> </Th>
              <Th> </Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td width="40%">Bruno de Almeida Honorato</Td>
              <Td align="center">Start</Td>
              <Td align="center">30 de Abril de 2019</Td>
              <Td align="center">30 de Abril de 2019</Td>
              <Td align="center">
                <IconContext.Provider value={{ color: '#42cb59' }}>
                  <MdCheckCircle size={20} />
                </IconContext.Provider>
              </Td>
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
