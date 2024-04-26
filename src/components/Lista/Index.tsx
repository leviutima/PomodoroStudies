import { useState } from 'react'
import Item from './Item/Index'
import style from './Lista.module.css'


function Lista (){
    const [tarefas, setTarefas] = useState([{
    tarefa: 'react',
    tempo: '02:00:00',
    },
    {
    tarefa: 'typescript',
    tempo: '01:00:00'
    },
    {
    tarefa: 'JAVA',
    tempo: '10:00:00'
    }]);
    


    return(
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
                setTarefas ([...tarefas, { tarefa: "Estudar hooks", tempo: "05:00:00"}])
            }}>Estudos do dia</h2>
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