import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

import { Container, Content, Logo } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Logo>
            <img src={logo} alt="Gympoint" />
            <span>GYMPOINT</span>
          </Logo>
          <Link to="/students">ALUNOS</Link>
          <Link to="/plans">PLANOS</Link>
          <Link to="/registrations">MATRÍCULAS</Link>
          <Link to="/help-orders">PEDIDOS DE AUXÍLIO</Link>
        </nav>

        <aside>
          <span>Bruno de Almeida</span>
          <Link to="/logout">sair do sistema</Link>
        </aside>
      </Content>
    </Container>
  );
}
