import style from '../Lista.module.css'

function Item (props: {tarefa: String, tempo: String}) {
    const {tarefa, tempo} = props
    return(
        <li className={style.item}>
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