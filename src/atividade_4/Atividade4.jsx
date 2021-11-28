import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import AddAluno from './hooks/AddAluno';
import ListAlunos from './hooks/ListAlunos';

export default function Atividade4() {
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
        <Route path="/add" element={<AddAluno />} />
        <Route path="/edit/:id" element={<AddAluno />} />
        <Route path="/" element={<ListAlunos />} />
      </Routes>
    </div>
  );
}
