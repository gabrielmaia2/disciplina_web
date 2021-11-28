import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  Col, Row, Button, Container,
} from 'react-bootstrap';

export default function ListAlunos() {
  const [alunos, setAlunos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlunos = async () => {
      try {
        const { status, data: { success, alunos: newAlunos } } = await axios.get('/alunos/getall');
        if (status === 200 && success) {
          setAlunos(newAlunos);
        } else {
          setError(Error('Failed fetching data'));
        }
      } catch (e) {
        setError(e);
      }
    };
    fetchAlunos();
  }, []);

  if (error) {
    return (
      <div className="error">
        {String(error)}
      </div>
    );
  }

  const alunosView = [];
  alunos.forEach((a) => alunosView.push(
    <Row key={a.id} className="p-1">
      <Col xs={0}>{a.id}</Col>
      <Col xs={0}>{a.nome}</Col>
      <Col xs={0}>{a.curso}</Col>
      <Col xs={0}>{a.IRA}</Col>
      <Col xs="auto"><Button variant="primary">Edit</Button></Col>
      <Col xs="auto"><Button variant="danger">Delete</Button></Col>
    </Row>,
  ));

  return (
    <div>
      <h1 className="text-center p-2">Alunos</h1>
      <Container fluid>
        {alunosView}
      </Container>
    </div>
  );
}
