import styles from './styles.module.css';
import CircleIcon from '../../assets/circle.svg';
import CompleteCircleIcon from '../../assets/completeCircle.svg';
import TrashIcon from '../../assets/trash.svg';
import { ITask } from '../../interfaces';


export function Task({ id, content, status }: ITask) {
    return (
        <div className={styles['task']}>
            <img alt='Circulo' src={status === 'done' ? CompleteCircleIcon : CircleIcon} />
            <div className={styles['content']}>
                <span className={status === 'done' ? styles.task_done : ''}>{content}</span>
            </div>
            <img alt='Lixeira' src={TrashIcon} />
        </div>
    )
}