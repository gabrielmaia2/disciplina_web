import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  Col, Row, Button, Container, Alert,
} from 'react-bootstrap';

export default function ListAlunos() {
  const [alunos, setAlunos] = useState([]);
  const [error, setError] = useState(null);
  const [updater, setUpdater] = useState(false);
  const updateList = () => setUpdater(!updater);

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
  }, [updater]);

  const deleteAluno = async (id) => {
    try {
      const { status, data: { success } } = await axios.delete(`/alunos/delete/${id}`);
      if (status === 200 && success) {
        updateList();
      } else {
        setError(Error(`Failed deleting aluno with id ${id}`));
      }
    } catch (e) {
      setError(e);
    }
  };

  if (error) {
    return (
      <Alert variant="danger">
        {String(error)}
      </Alert>
    );
  }

  const alunosView = [];
  alunos.forEach((a) => alunosView.push(
    <Row key={a.id}>
      <Col xs={0} className="border">{a.id}</Col>
      <Col xs={0} className="border">{a.nome}</Col>
      <Col xs={0} className="border">{a.curso}</Col>
      <Col xs={0} className="border">{a.IRA}</Col>
      <Col xs="auto"><Button variant="primary" className="m-1">Edit</Button></Col>
      <Col xs="auto"><Button onClick={() => deleteAluno(a.id)} variant="danger" className="m-1">Delete</Button></Col>
    </Row>,
  ));

  return (
    <div className="text-center">
      <h1 className="p-2">Alunos</h1>
      <Container fluid>
        {alunosView}
      </Container>
      <Button className="p-2 m-2" variant="primary" onClick={updateList}>Update</Button>
    </div>
  );
}
