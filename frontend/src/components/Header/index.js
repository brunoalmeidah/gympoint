import React from 'react';
import logo from '~/assets/logo.svg';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <div>
            <img src={logo} alt="Gympoint" />
            <h2>GYMPOINT</h2>
          </div>
        </nav>
      </Content>
    </Container>
  );
}
