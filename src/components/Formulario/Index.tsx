import React, { useState } from "react"
import Botao from "../Botao/Index"
import './style.scss'


class Formulario extends React.Component {

    state =  {
        tarefa:'',
        tempo: '00:00'
    };

    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        console.log('state: ', this.state)
    }

    render(){
    return(

        <form className="novaTarefa" onSubmit={this.adicionarTarefa.bind(this)}>
            <div className="inputContainer">
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    value={this.state.tarefa}
                    onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
                    placeholder="O que você quer estudar?"
                    required
                />
            </div>
            <div className="inputContainer">
                <label htmlFor="tempo">
                    tempo
                </label>
                <input
                    type="time"
                    step='1'
                    name="tempo"
                    value={this.state.tempo}
                    onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
                    id="tempo"
                    min="00:00:00"
                    max='01:30:00'
                    required
                />
            </div>
            <Botao
                texto = 'Adicionar'
            />
        </form>
    )
    } 
}
export default Formulario