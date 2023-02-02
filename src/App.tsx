import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css'
import { PlusCircle } from 'phosphor-react'
import { Checkbox } from './components/Checkbox';
import emptyIcon from './assets/clipboard.svg';
import { useState } from 'react';

type taskType = {
  id: number,
  description: string;
  marked: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<taskType[]>([]);
  const [taskText, setTaskText] = useState<string>('');

  function handleNewTaskChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTaskText(event.target.value);
  }

  function handleNewTask() {
    setTasks([...tasks, { id: tasks.length + 1, description: taskText, marked: false}]);
    setTaskText('');
  }

  function handleFinishTask(id: number) {
    const tasksUpdated = tasks.map(task => {
      if(task.id === id) {
        task.marked = !task.marked;
      }
      return task;
    });

    setTasks(tasksUpdated);
  }

  return (
    <div>
      <Header></Header>
      <div className={styles.wrapper}>
        <div className={styles.task}>
          <input type="text" placeholder="Adicione uma nova tarefa" name="task" onChange={handleNewTaskChange} value={taskText}/>
          <button onClick={handleNewTask}>Criar <PlusCircle/></button>
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
                {tasks.map(task => {
                  return (
                    <Checkbox key={task.id} id={task.id} description={task.description} marked={task.marked} onFinishTask={handleFinishTask} />
                  );
                })}
              </div>
              <div className={styles.empty}>
                <img src={emptyIcon} alt="Logo To Do List" />
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
