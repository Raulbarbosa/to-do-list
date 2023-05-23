import styles from './styles.module.css';
import Plus from '../../assets/plus.svg';

export function InputAddTask() {
    return (
        <div className={styles['input-area']}>
            <input className={styles['custom-input']} placeholder='Adicione uma nova tarefa' />
            <button className={styles['custom-button']}>
                Criar
                <img src={Plus} />
            </button>
        </div>
    )
}