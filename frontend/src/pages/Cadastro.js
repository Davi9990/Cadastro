import React, { useState } from 'react';
import axios from 'axios';
import UserForm from '../components/UserForm';

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    endereco: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/usuarios', formData);
      alert('Usuário cadastrado!');
      setFormData({ nome: '', email: '', endereco: '' }); // Limpa o formulário
    } catch (error) {
      alert('Erro: ' + error.response?.data?.error || error.message);
    }
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <UserForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}