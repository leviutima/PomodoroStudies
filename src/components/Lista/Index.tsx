import { Tarefa } from '../../types/tarefa'
import Item from './Item/Index'
import style from './Item/Item.module.scss'

interface Props {
    tarefas: Tarefa[],
    selecionaTarefa:(tarefaSelecionada: Tarefa) => void
}


function Lista ({tarefas, selecionaTarefa}: Props) {
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul >
                {tarefas.map((item, ) => (
                   <Item 
                    selecionaTarefa={selecionaTarefa}
                   key={item.id}
                       {...item}
                   />   
                ))}
            </ul>
        </aside>
    )
}

export default Lista