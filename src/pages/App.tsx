import React from 'react';
import Botao from '../components/Botao/Index';
import Formulario from '../components/Formulario/Index';
import Lista from '../components/Lista/Index';
import './style.scss'
import Cronometro from '../components/Cronometro/Index';



function App() {
  return (
    <div className="AppStyle">
        <Formulario/>
        <Cronometro/>
        <Lista/>
    </div>
  );
}

export default App;
