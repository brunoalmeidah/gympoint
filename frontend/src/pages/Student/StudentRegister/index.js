import React from 'react';
import { Form } from '@rocketseat/unform';
import Card from '~/components/Card';
import { Container, Row, Col, InputDefault, Label } from '~/styles/default';

export default function StudentRegister({ props }) {
  function handleSubmit(data) {
    console.tron(data);
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Card
        title="Cadastro de Aluno"
        width="700px"
        submit
        linkbackto="/students"
      >
        <Container>
          <Row>
            <Col>
              <Label>NOME COMPLETO</Label>
              <InputDefault name="name" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Label>ENDEREÇO DE E-MAIL</Label>
              <InputDefault name="email" type="email" />
            </Col>
          </Row>

          <Row>
            <Col>
              <Label>IDADE</Label>
              <InputDefault name="age" />
            </Col>

            <Col>
              <Label>PESO (em kg)</Label>
              <InputDefault name="weight" />
            </Col>

            <Col>
              <Label>ALTURA</Label>
              <InputDefault name="height" />
            </Col>
          </Row>
        </Container>
      </Card>
    </Form>
  );
}
