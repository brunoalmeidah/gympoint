import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form } from '@rocketseat/unform';
import Card from '~/components/Card';
import { Container, Row, Col, InputDefault, Label } from '~/styles/default';

export default function PlanRegister() {
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
  }, []);
  function handleSubmit(data) {
    console.tron(data);
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Card title="Cadastro de plano" width="700px" submit backTo="/plans">
        <Container>
          <Row>
            <Col>
              <Label>TÍTULO DO PLANO</Label>
              <InputDefault name="title" />
            </Col>
          </Row>

          <Row>
            <Col>
              <Label>DURAÇÃO (em meses)</Label>
              <InputDefault name="duration" />
            </Col>

            <Col>
              <Label>PREÇO MENSAL</Label>
              <InputDefault name="price" />
            </Col>

            <Col>
              <Label>PREÇO TOTAL</Label>
              <InputDefault name="total" />
            </Col>
          </Row>
        </Container>
      </Card>
    </Form>
  );
}
