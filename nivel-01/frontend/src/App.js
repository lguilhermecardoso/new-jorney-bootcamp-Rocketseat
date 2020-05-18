import React, {useState} from 'react';

import "./App.css";
import backGroundImage from "./assets/background.jpg";
import Header from './components/Header'

function App() {

  const [projects, setProjects] = useState(['Desenvolvimento de Apps', 'Frontend Web']);

  function HandleAddProject() {
    // projects.push(`novo projeto ${date.now()}`);
    setProjects([...projects, `novo projeto ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Projects" />
      <img width={300} src={backGroundImage} />
      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>
      <button type="button" onClick={HandleAddProject}>
        Adicionar projeto
      </button>
    </>
  );
}


export default App;