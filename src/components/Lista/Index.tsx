import { Tarefa } from '../../types/tarefa'
import Item from './Item/Index'
import style from './Lista.module.css'




function Lista ({tarefas}: {tarefas: Tarefa[]}) {
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul >
                {tarefas.map((item, index) => (
                   <Item key={index}
                       {...item}
                   />   
                ))}
            </ul>
        </aside>
    )
}

export default Lista