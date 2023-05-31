import styles from './styles.module.css';
import CircleIcon from '../../assets/circle.svg';
import CompleteCircleIcon from '../../assets/completeCircle.svg';
import TrashIcon from '../../assets/trash.svg';
import { ITask } from '../../interfaces';
import { useState } from 'react';

interface TaskProps {
    task: ITask;
    onDeleteTask: (id: number) => void;
    onChangeStatus: () => void;
}

export function Task({ task, onDeleteTask, onChangeStatus }: TaskProps) {

    return (
        <div className={styles['task']}>
            <img alt='Circulo' src={task.status ? CompleteCircleIcon : CircleIcon} onClick={() => onChangeStatus()} />
            <div className={styles['content']}>
                <span className={task.status ? styles.task_done : ''}>{task.content}</span>
            </div>
            <img alt='Lixeira' src={TrashIcon} onClick={() => onDeleteTask(task.id)} />
        </div>
    )
}