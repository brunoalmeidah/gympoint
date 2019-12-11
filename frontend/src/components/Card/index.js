import React from 'react';
import PropTypes from 'prop-types';
import { MdAdd, MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

import { Container, Header, Body, Button, Linkto } from './styles';

export default function Card({
  children,
  title,
  width,
  backTo,
  registerTo,
  submit,
  handleSearch,
}) {
  return (
    <Container width={width}>
      <Header>
        <h1>{title}</h1>
        <div>
          {backTo !== '' && backTo ? (
            <Linkto to={backTo}>
              <MdKeyboardArrowLeft /> VOLTAR
            </Linkto>
          ) : (
            ''
          )}
          {registerTo !== '' && registerTo ? (
            <Linkto primary to={registerTo}>
              <MdAdd />
              CADASTRAR
            </Linkto>
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
  backTo: PropTypes.string,
  registerTo: PropTypes.string,
  submit: PropTypes.bool,
  handleSearch: PropTypes.func,
};

Card.defaultProps = {
  width: '700px',
  backTo: '',
  registerTo: '',
  submit: false,
  handleSearch: undefined,
};
