import React from 'react';
import PropTypes from 'prop-types';
import { MdAdd, MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

import { Container, Header, Body, Button, LinkBack } from './styles';

export default function Card({
  children,
  title,
  width,
  linkbackto,
  handleRegister,
  submit,
  handleSearch,
}) {
  return (
    <Container width={width}>
      <Header>
        <h1>{title}</h1>
        <div>
          {linkbackto !== '' && linkbackto ? (
            <LinkBack to={linkbackto}>
              <MdKeyboardArrowLeft /> VOLTAR
            </LinkBack>
          ) : (
            ''
          )}
          {handleRegister ? (
            <Button primary onClick={handleRegister}>
              <MdAdd />
              CADASTRAR
            </Button>
          ) : (
            ''
          )}
          {submit ? (
            <Button primary type="submit">
              <MdDone />
              SALVAR
            </Button>
          ) : (
            ''
          )}
          {handleSearch ? (
            <input
              type="text"
              placeholder="Buscar aluno"
              onChange={handleSearch}
            />
          ) : (
            ''
          )}
        </div>
      </Header>
      <Body>{children}</Body>
    </Container>
  );
}

Card.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.string,
};

Card.defaultProps = {
  width: '700px',
};
