import todoLogo from '../assets/rocket.svg';
import styles from './Header.module.css';

export function Header() {
  return (
    <div className={styles.headerBackground}>
      <header className={styles.header}>
        <img src={todoLogo} alt="Logo To Do List" />
        <h1>to<div>do</div></h1>
      </header>
    </div>
  )
}