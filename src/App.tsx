import { Header } from "./components/Header";
import styles from './app.module.css'
import { InputAddTask } from "./components/InputAddTask";
import { TaskBoard } from "./components/TaskBoard";

export function App() {
    return (
        <div className={styles['container-main']}>
            <Header />
            <TaskBoard />
        </div>
    )
}