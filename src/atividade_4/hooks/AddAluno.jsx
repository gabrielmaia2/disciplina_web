import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

export default function AddAluno() {
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
  const { id } = params;

  const addAluno = async (event) => {
    event.preventDefault();
    try {
      const aluno = { nome, curso, IRA };
      const { status, data: { success } } = await axios.post('/alunos/post', aluno);
      if (status === 200 && success) {
        setNome('');
        setCurso('');
        setIRA(0);
      } else {
        setError(Error('Falha ao adicionar aluno'));
      }
    } catch (e) {
      setError(e);
    }
  };

  const editAluno = async (event) => {
    event.preventDefault();
    try {
      const aluno = { nome, curso, IRA };
      const { status, data: { success } } = await axios.put(`/alunos/put/${id}`, aluno);
      if (status === 200 && success) {
        navigate('/');
      } else {
        setError(Error('Falha ao atualizar aluno'));
      }
    } catch (e) {
      setError(e);
    }
  };

  const handleSubmit = id === undefined ? addAluno : editAluno;

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const { status, data: { success, aluno } } = await axios.get(`/alunos/get/${id}`);
          if (status === 200 && success) {
            setNome(aluno.nome);
            setCurso(aluno.curso);
            setIRA(aluno.IRA);
          } else {
            setError(Error('Falha ao buscar dados do aluno'));
          }
        } catch (e) {
          setError(e);
        }
      };
      fetchData();
    }
  }, [id]);

  if (error) {
    return (
      <div className="error">
        Um erro ocorreu
        {String(error)}
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-center p-2">{id === undefined ? 'Adicionar aluno' : 'Editar aluno' }</h1>
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
          {id === undefined ? 'Adicionar' : 'Editar' }
        </Button>
      </Form>
    </div>
  );
}
