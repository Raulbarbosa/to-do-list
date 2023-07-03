import styles from './styles.module.css';
import { Task } from '../Task';
import { ITask } from '../../interfaces';
import { FormEvent, useEffect, useState } from 'react';
import { InputAddTask } from '../InputAddTask';
import { v4 as uuidv4 } from 'uuid';
import tasks from '../../data';

export function TaskBoard() {

    const [allTasks, setAllTasks] = useState(tasks);
    const [tasksDone, setTasksDone] = useState(0);
    const [newTask, setNewTask] = useState('');

    // function handlerAddNewTask(event: FormEvent) {
    //     event.preventDefault()

    //     const data = {
    //         id: uuidv4(),
    //         content: newTask,
    //         status: false
    //     }

    //     setAllTasks([...allTasks, data])
    //     setNewTask('')

    // }

    function handlerChangeStatus(task: ITask) {
        const updatedTask = allTasks.map((item) => {
            if (item.id == task.id) {
                item.status = !task.status
            }
            return item
        })
        setAllTasks(updatedTask)
    }

    function handlerDeleteTask(id: string) {

        const updatedTasks = allTasks.filter(task => {
            return task.id !== id;
        })
        console.log(updatedTasks);

        setAllTasks(updatedTasks)
    }

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
                    {allTasks.map((task) => {
                        return (
                            <Task
                                key={task.id}
                                task={task}
                                onDeleteTask={handlerDeleteTask}
                                onChangeStatus={() => handlerChangeStatus(task)}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}