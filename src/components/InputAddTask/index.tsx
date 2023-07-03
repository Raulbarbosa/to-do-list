import styles from './styles.module.css';
import Plus from '../../assets/plus.svg';
import { FormEvent } from 'react';

export function InputAddTask() {
    return (
        <form className={styles['input-area']}>
            <input className={styles['custom-input']} placeholder='Adicione uma nova tarefa' />
            <button type='button' className={styles['custom-button']}>
                Criar
                <img src={Plus} />
            </button>
        </form>
    )
}