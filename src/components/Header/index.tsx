import styles from './styles.module.css';
import Logo from '../../assets/push_pin.svg';

export function Header() {

    return (
        <div className={styles.container}>
            <img className={styles.logo} src={Logo} alt='pin' />
            <span className={styles['project-name']}>Lista de tarefa</span>
        </div>
    )
}