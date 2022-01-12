import React, { useEffect, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  addDoc, setDoc, getDoc, collection, doc,
} from 'firebase/firestore';

import { createConsumer } from '../../utils/FirebaseContext';
import Firebase from '../../utils/Firebase';

function EditAluno({ firebase: { db } }) {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [IRA, setIRA] = useState(0);
  const [error, setError] = useState(null);
  const updateIRA = (e) => {
    const invalid = Number.isNaN(+e.target.value);
    if (!invalid) { setIRA(e.target.value); }
  };
  const navigate = useNavigate();
  const params = useParams();
  const { _id } = params;

  const addAluno = async (event) => {
    event.preventDefault();
    try {
      const aluno = { nome, curso, IRA };
      await addDoc(collection(db, 'alunos'), aluno);
      setNome('');
      setCurso('');
      setIRA(0);
    } catch (e) {
      setError(e);
    }
  };

  const editAluno = async (event) => {
    event.preventDefault();
    try {
      const aluno = { nome, curso, IRA };
      await setDoc(doc(db, 'alunos', _id), aluno);
      navigate('/');
    } catch (e) {
      setError(e);
    }
  };

  const handleSubmit = _id === undefined ? addAluno : editAluno;

  useEffect(() => {
    if (_id !== undefined) {
      const fetchData = async () => {
        try {
          const docSnap = await getDoc(doc(db, 'alunos', _id));
          const aluno = docSnap.data();
          setNome(aluno.nome);
          setCurso(aluno.curso);
          setIRA(aluno.IRA);
        } catch (e) {
          setError(e);
        }
      };
      fetchData();
    }
  }, [_id, db]);

  if (error) {
    return (
      <Alert variant="danger">
        Um erro ocorreu
        {' '}
        {String(error)}
      </Alert>
    );
  }

  return (
    <div>
      <h1 className="text-center p-2">{_id === undefined ? 'Adicionar aluno' : 'Editar aluno' }</h1>
      <Form onSubmit={handleSubmit} className="w-25 mx-auto">
        <Form.Group className="mb-3" controlId="formNome">
          <Form.Label className="mx-1">Nome</Form.Label>
          <Form.Control type="text" placeholder="Insira nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCurso">
          <Form.Label className="mx-1">Curso</Form.Label>
          <Form.Control type="text" placeholder="Insira curso" value={curso} onChange={(e) => setCurso(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formIRA">
          <Form.Label className="mx-1">IRA</Form.Label>
          <Form.Control type="text" placeholder="Insira IRA" value={IRA} onChange={updateIRA} />
        </Form.Group>

        <Button className="mx-1" variant="primary" type="submit">
          {_id === undefined ? 'Adicionar' : 'Editar' }
        </Button>
      </Form>
    </div>
  );
}

EditAluno.propTypes = {
  firebase: PropTypes.instanceOf(Firebase).isRequired,
};

export default createConsumer(EditAluno);
