import React, { useState } from 'react';
import Botao from '../components/Botao/Index';
import Formulario from '../components/Formulario/Index';
import Lista from '../components/Lista/Index';
import './style.scss'
import Cronometro from '../components/Cronometro/Index';
import { Tarefa } from '../types/tarefa';



function App() {

  const [tarefas, setTarefas] = useState< Tarefa[] | [] >([]);

  return (
    <div className="AppStyle">
        <Formulario setTarefas={setTarefas}/>
        <Lista tarefas = {tarefas}/>
        <Cronometro/>
    </div>
  );
}

export default App;
