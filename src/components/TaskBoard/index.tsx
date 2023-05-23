import styles from './styles.module.css';
import { Task } from '../Task';
import { tasks } from '../../data';

console.log(tasks)

export function TaskBoard() {
    return (
        <div className={styles["task-board"]}>
            <div className={styles['tasks-info']}>
                <div className={styles['info']}>
                    <span>Tarefas criadas</span>
                    <span className={styles['number']}> {5} </span>
                </div>
                <div className={styles['info']}>
                    <span>Concluídas</span>
                    <span className={styles['number']}> {0} </span>
                </div>
            </div>
            <div className={styles["tasks"]}>
                {tasks.map((item) => {
                    return (
                        <Task key={item.id} id={item.id} content={item.content} status={item.status} />
                    )
                })}
            </div>
        </div>
    )
}