import React from 'react';
import Card from '~/components/Card';
import { Container } from './styles';
import { LinkBlue, LinkRed, Th, Td } from '~/styles/default';

export default function PlanList() {
  return (
    <Card title="Gerenciando planos" width="800px" registerTo="/plans/new">
      <Container>
        <table>
          <thead>
            <tr>
              <Th>TÍTULO</Th>
              <Th align="center">DURAÇÃO</Th>
              <Th align="center">VALOR p/ MÊS</Th>
              <Th> </Th>
              <Th> </Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td width="300px">Start</Td>
              <Td align="center" width="100px">
                1 mês
              </Td>
              <Td align="center" width="100px">
                R$ 129,00
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
