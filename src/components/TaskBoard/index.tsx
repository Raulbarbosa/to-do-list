import styles from './styles.module.css';
import { Task } from '../Task';
import { ITask } from '../../interfaces';
import { useEffect, useState } from 'react';
import { InputAddTask } from '../InputAddTask';

const tasks: ITask[] = [
    {
        id: 1,
        content: "Fazer compras",
        status: true
    },
    {
        id: 2,
        content: "Ler livro",
        status: false
    },
    {
        id: 3,
        content: "Estudar para a prova",
        status: false
    }
];

export function TaskBoard() {

    const [allTasks, setAllTasks] = useState(tasks);
    const [tasksDone, setTasksDone] = useState(0);

    function handlerChangeStatus(task: ITask) {

        const updatedTask = allTasks.map((item) => {
            if (item.id == task.id) {
                item.status = !task.status
            }
            return item
        })

        setAllTasks(updatedTask)
    }

    function handlerDeleteTask(id: number) {
        const updatedTasks = allTasks.filter(task => {

            return task.id !== id;
        })
        setAllTasks(updatedTasks)
    }

    // useEffect(() => {
    //     () => {
    //         let localTasksDone = tasks.filter((task) => {
    //             return task.status === true
    //         })

    //         setTasksDone(localTasksDone.length)
    //     }
    // }, [tasks])

    return (
        <div>
            <InputAddTask />
            <div className={styles["task-board"]}>
                <div className={styles['tasks-info']}>
                    <div className={styles['info']}>
                        <span>Tarefas criadas</span>
                        <span className={styles['number']}> {tasks.length} </span>
                    </div>
                    <div className={styles['info']}>
                        <span>Concluídas</span>
                        <span className={styles['number']}> {tasksDone} </span>
                    </div>
                </div>
                <div className={styles["tasks"]}>
                    {tasks.map((item) => {
                        return (
                            <Task
                                key={item.id}
                                task={item}
                                onDeleteTask={handlerDeleteTask}
                                onChangeStatus={() => handlerChangeStatus(item)}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}