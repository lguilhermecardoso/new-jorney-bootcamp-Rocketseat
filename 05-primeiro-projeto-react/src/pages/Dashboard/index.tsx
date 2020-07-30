import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logoImage from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dasboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState([]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>) {
    // Adição de um novo repositório
    event.preventDefault();

    const response = await api.get(`repos/${newRepo}`);
    console.log(response.data);
  }

  return (
    <>
      <img src={logoImage} alt="Github Explorer" />
      <Title>Explore reposiórios no GitHub</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/15979107?s=460&u=6db9444e295e2d7222301541f12af526363bd745&v=4"
            alt="Gui"
          />
          <div>
            <strong>rockeseat/unform</strong>
            <p>Uma descrição bem legal! para forms JS!</p>
          </div>
          <FiChevronRight size="20" />
        </a>
      </Repositories>
    </>
  );
};

export default Dasboard;
