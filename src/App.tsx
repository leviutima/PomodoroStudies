import React from 'react';
import Botao from './components/Botao/Index';
import Formulario from './components/Formulario/Index';
import Lista from './components/Lista/Index';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Formulario/>
        <Lista/>
      </header>
    </div>
  );
}

export default App;
