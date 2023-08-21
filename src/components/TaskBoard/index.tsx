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

    function handlerAddNewTask(): void {

        const data = {
            id: uuidv4(),
            content: newTask,
            status: false
        }

        setAllTasks(state => [...state, data])
        setNewTask('')
    }

    function handlerChangeStatus(task: ITask) {
        const updatedTask = allTasks.filter((item) => {
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

        setAllTasks(updatedTasks)
    }

    useEffect(() => {
        const taskdone = allTasks.filter((item) => {
            return item.status === true
        })

        setTasksDone(taskdone.length)
    }, [allTasks])

    return (
        <div >
            <InputAddTask onCreateTask={handlerAddNewTask} value={newTask} handlerValue={setNewTask} />
            <div style={{ display: `${allTasks.length == 0 ? 'none' : ''}` }} className={styles["task-board"]}>
                <div className={styles['tasks-info']}>
                    <div className={styles['info']}>
                        <span>Tarefas criadas</span>
                        <span className={styles['number']}> {allTasks.length} </span>
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