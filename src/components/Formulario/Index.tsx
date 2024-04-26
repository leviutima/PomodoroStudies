import Botao from "../Botao/Index"

function Formulario (){
    return(
        <form>
            <div>
                <label htmlFor="tarefa">
                    adicione um novo estudo
                </label>
                <input
                    type="text"
                    name="tarefa"
                    placeholder="O que você quer estudar?"
                />
            </div>
            <Botao/>
            <div>
                <label htmlFor="tempo">
                    tempo
                </label>
                <input
                    type="time"
                    step='1'
                    name="tempo"
                    id="tempo"
                    min="00:00:00"
                    max='01:30:00'
                    required
                />
            </div>
            <Botao/>
        </form>
    )
} 

export default Formulario