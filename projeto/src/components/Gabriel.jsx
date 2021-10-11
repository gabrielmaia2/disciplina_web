import React, { Component } from 'react'
import Aluno from './Aluno'

export default class Gabriel extends Component {
  render() {
    return <Aluno
      nome="Gabriel Maia Gondim"
      idade={21}
      curso="Engenharia de Software"
      cidade="Barreira"
      email="gondim@alu.ufc.br"
    />
  }
}
