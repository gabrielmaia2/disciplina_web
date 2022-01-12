import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import EditAluno from './components/EditAluno';
import ListAlunos from './components/ListAlunos';

import { createProvider } from '../utils/FirebaseContext';
import Firebase from '../utils/Firebase';

function Atividade7() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link className="navbar-brand" to="/">Crud alunos</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Listar</Nav.Link>
              <Nav.Link as={Link} to="/add">Adicionar</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/add" element={<EditAluno />} />
        <Route path="/edit/:_id" element={<EditAluno />} />
        <Route path="/" element={<ListAlunos />} />
      </Routes>
    </div>
  );
}

export default createProvider(Atividade7, new Firebase());
