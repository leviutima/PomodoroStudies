import { Tarefa } from '../../../types/tarefa'
import style from '../Lista.module.css'

interface Props extends Tarefa{
    selecionaTarefa: (tarefaSelecionada: Tarefa) => void
}

function Item ({tarefa, tempo, selecionado, completado, id, selecionaTarefa}: Props) {
    return(
        <li 
    className={`${style.item}${selecionado ? style.itemSelecionado  : ''}`} 
        onClick={() => 
            selecionaTarefa({
                tarefa,
                tempo,
                selecionado,
                completado,
                id
        })}>
            <h3>
                {tarefa}
            </h3>
            <span>
                {tempo}
            </span>
        </li>  
    )
}

export default Item