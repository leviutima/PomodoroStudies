import styles from './Botao.module.css'

type Props = {texto: String}

function Botao (props: Props) {
    return(
        <button className={styles.botao}>
            {props.texto}
        </button>
    )
}

export default Botao