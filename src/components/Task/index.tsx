import styles from './styles.module.css';
import CircleIcon from '../../assets/circle.svg';
import CompleteCircleIcon from '../../assets/completeCircle.svg';
import TrashIcon from '../../assets/trash.svg';
import { ITask } from '../../interfaces';

interface TaskProps {
    task: ITask;
    onDeleteTask: (id: string) => void;
    onChangeStatus: () => void;
}

export function Task({ task, onDeleteTask, onChangeStatus }: TaskProps) {

    function handlerDeleteTask() {
        onDeleteTask(task.id)
    }

    function handlerChangeStatus() {
        onChangeStatus()
        console.log(task)
    }

    return (
        <div className={styles['task']}>
            <img alt='Circulo' src={task.status ? CompleteCircleIcon : CircleIcon} onClick={() => handlerChangeStatus()} />
            <div className={styles['content']}>
                <span
                    className={task.status ? styles.task_done : ''}
                    onClick={() => handlerChangeStatus()}
                >{task.content}</span>
            </div>
            <img alt='Lixeira' src={TrashIcon} onClick={() => handlerDeleteTask()} />
        </div>
    )
}