import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css'
import { PlusCircle } from 'phosphor-react'
import { Checkbox } from './components/Checkbox';

export function App() {
  return (
    <div>
      <Header></Header>
      <div className={styles.wrapper}>
        <div className={styles.task}>
          <input type="text" placeholder="Adicione uma nova tarefa"/>
          <button>Criar <PlusCircle/></button>
        </div>
        <div className={styles.main}>
          <main className={styles.formBox}>
            <fieldset>
              <p className={styles.legend}>
                Tarefas criadas <div className={styles.taskCounter}>5</div>
              </p>
              <p className={styles.legend}>
                Concluídas <div className={styles.taskCounter}>2 de 5</div>
              </p>
              <div>
                <Checkbox numberName="1" body="teste teste teste"/>
                <Checkbox numberName="2" body="teste teste teste"/>
              </div>
              <div>
                <p>icone</p>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </fieldset>
          </main>
        </div>
      </div>
    </div>
  )
}
