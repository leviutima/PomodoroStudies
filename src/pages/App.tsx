import React, { useState } from 'react';
import Formulario from '../components/Formulario/Index';
import Lista from '../components/Lista/Index';
import './style.scss'
import { Tarefa } from '../types/tarefa';
import Cronometro from '../components/Cronometro/Index';



function App() {

  const [tarefas, setTarefas] = useState< Tarefa[]>([]);
  const [selecionado, setSelecionado] = useState<Tarefa>()

  function selecionaTarefa(tarefaSelecionada: Tarefa){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }

  function finalizarTarefa() {
    if(selecionado) {
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }

  return (
    <div className="AppStyle">
        <Formulario setTarefas={setTarefas}/>
        <Lista 
            tarefas = {tarefas}
            selecionaTarefa={selecionaTarefa}/>
        <Cronometro 
        selecionado={selecionado}
        finalizarTarefa={finalizarTarefa}/>
    </div>
  );
}

export default App;
