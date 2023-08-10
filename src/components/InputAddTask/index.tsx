import styles from './styles.module.css';
import Plus from '../../assets/plus.svg';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface IInputTaskProps {
    onCreateTask: () => void;
    value: string;
    handlerValue: (text: string) => void;
}

export function InputAddTask({ onCreateTask, handlerValue: setNewTask, value: newTask }: IInputTaskProps) {



    function handleNewTask(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewTask(event.target.value);
    }

    function handlerCreateNewTask(event: FormEvent) {
        event.preventDefault();

        onCreateTask()
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Este campo é obrigatório.')
    }

    return (
        <form onSubmit={handlerCreateNewTask} className={styles['input-area']}>
            <textarea
                className={styles['custom-textarea']}
                value={newTask}
                placeholder='Adicione uma nova tarefa'
                onChange={handleNewTask}
                onInvalid={handleNewTaskInvalid}
                required
            />
            <button type='submit' className={styles['custom-button']}>
                Criar
                <img src={Plus} />
            </button>
        </form>
    )
}