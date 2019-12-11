import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form } from '@rocketseat/unform';
import Card from '~/components/Card';
import { Container, Row, Col, InputDefault, Label } from '~/styles/default';

export default function RegistrationRegister() {
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
  }, []);
  function handleSubmit(data) {
    console.tron(data);
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Card
        title="Cadastro de matrícula"
        width="700px"
        submit
        backTo="/registrations"
      >
        <Container>
          <Row>
            <Col>
              <Label>ALUNO</Label>
              <InputDefault name="student" />
            </Col>
          </Row>

          <Row>
            <Col>
              <Label>PLANO</Label>
              <InputDefault name="plan" />
            </Col>

            <Col>
              <Label>DATA DE INÍCIO</Label>
              <InputDefault name="price" />
            </Col>

            <Col>
              <Label>DATA DE TÉRMINO</Label>
              <InputDefault name="total" />
            </Col>
            <Col>
              <Label>VALOR FINAL</Label>
              <InputDefault name="total" />
            </Col>
          </Row>
        </Container>
      </Card>
    </Form>
  );
}
