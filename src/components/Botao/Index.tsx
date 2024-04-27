import styles from './Botao.module.css'

interface Props {
    type?: 'button' | 'submit' | 'reset' | undefined,
    onClick?: () => void,
    children?: React.ReactNode
}

function Botao ({ onClick, type, children}: Props) {
    return(
        <button
            onClick={onClick}
            type={type} 
            className={styles.botao}
        >
        {children}
        </button>
    )
}

export default Botao