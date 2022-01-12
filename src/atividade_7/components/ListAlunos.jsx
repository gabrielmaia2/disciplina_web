import React, { useState, useEffect } from 'react';
import {
  Col, Row, Button, Container, Alert,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  collection, getDocs, deleteDoc, doc,
} from 'firebase/firestore';

import { createConsumer } from '../../utils/FirebaseContext';
import Firebase from '../../utils/Firebase';

function ListAlunos({ firebase: { db } }) {
  const [alunos, setAlunos] = useState([]);
  const [error, setError] = useState(null);
  const [updater, setUpdater] = useState(false);
  const updateList = () => setUpdater(!updater);

  useEffect(() => {
    const func = async () => {
      try {
        const alunosCol = collection(db, 'alunos');
        const alunoSnapshot = await getDocs(alunosCol);
        const alunosList = alunoSnapshot.docs.map((d) => {
          const { nome, curso, IRA } = d.data();
          return {
            _id: d.id, nome, curso, IRA,
          };
        });
        setAlunos(alunosList);
      } catch (e) {
        setError(e);
      }
    };
    func();
  }, [updater, db]);

  const deleteAluno = async (_id) => {
    try {
      await deleteDoc(doc(db, 'alunos', _id));
      updateList();
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

  let alunosView = [];
  alunos.forEach((a) => alunosView.push(
    <Row key={a._id}>
      <Col xs={0} className="border">{a._id}</Col>
      <Col xs={0} className="border">{a.nome}</Col>
      <Col xs={0} className="border">{a.curso}</Col>
      <Col xs={0} className="border">{a.IRA}</Col>
      <Col xs="auto"><Button as={Link} to={`/edit/${a._id}`} variant="primary" className="m-1">Editar</Button></Col>
      <Col xs="auto"><Button onClick={() => deleteAluno(a._id)} variant="danger" className="m-1">Deletar</Button></Col>
    </Row>,
  ));

  if (alunos.length === 0) { alunosView = <Row><Col className="border">Lista vazia</Col></Row>; }

  return (
    <div className="text-center">
      <h1 className="p-2">Alunos</h1>
      <Container fluid>
        {alunosView}
      </Container>
      <Button className="p-2 m-2" variant="primary" onClick={updateList}>Atualizar lista</Button>
    </div>
  );
}

ListAlunos.propTypes = {
  firebase: PropTypes.instanceOf(Firebase).isRequired,
};

export default createConsumer(ListAlunos);
