import React from 'react';

const UserForm = ({ formData, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      name="nome"
      placeholder="Nome"
      value={formData.nome}
      onChange={handleChange}
    />
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
    />
    <input
      type="text"
      name="endereco"
      placeholder="Endereço"
      value={formData.endereco}
      onChange={handleChange}
    />
    <button type="submit">Cadastrar</button>
  </form>
);

export default UserForm;