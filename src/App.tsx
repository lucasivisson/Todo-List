import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css'
import { PlusCircle } from 'phosphor-react'
import { Checkbox } from './components/Checkbox';
import emptyIcon from './assets/clipboard.svg';
import React, { InvalidEvent, useState } from 'react';

type taskType = {
  id: number,
  description: string;
  marked: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<taskType[]>([]);
  const [taskText, setTaskText] = useState<string>('');
  const [numberOfConcludedTasks, setNumberOfConcludedTasks] = useState<number>(0);

  function handleNewTaskChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTaskText(event.target.value);
    event.target.setCustomValidity('');
  }

  function handleNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTasks([...tasks, { id: tasks.length + 1, description: taskText, marked: false}]);
    setTaskText('');
  }

  function handleFinishTask(id: number) {
    const tasksUpdated = tasks.map(task => {
      if(task.id === id) {
        task.marked = !task.marked;
        setNumberOfConcludedTasks((state) => {
          if(task.marked) {
            return state + 1;
          } else {
            return state - 1;
          }
        })
      }
      return task;
    });

    setTasks(tasksUpdated);
  }

  function handleRemoveTask(id: number) {
    const tasksUpdated = tasks.filter(task => {
      if(task.id !== id) {
        return task;
      } else {
        setNumberOfConcludedTasks((state) => {
          return state - 1;
        })
      }
    });

    setTasks(tasksUpdated);
  }

  function handleInvalidForm(event: React.ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Preencha o campo corretamente!');
  }

  return (
    <div>
      <Header></Header>
      <div className={styles.wrapper}>
        <form onSubmit={handleNewTask} className={styles.task}>
          <input type="text" required placeholder="Adicione uma nova tarefa" name="task" onChange={handleNewTaskChange} value={taskText} onInvalid={handleInvalidForm}/>
          <button type="submit">Criar <PlusCircle size={20}/></button>
        </form>
        <div className={styles.main}>
          <main className={styles.formBox}>
            <fieldset>
              <p className={styles.legend}>
                Tarefas criadas <div className={styles.taskCounter}>{tasks.length}</div>
              </p>
              <p className={styles.legend}>
                Concluídas <div className={styles.taskCounter}>{numberOfConcludedTasks} de {tasks.length}</div>
              </p>
              <div className={tasks.length === 0 ? styles.displayNone : undefined}>
                {tasks.map(task => {
                  return (
                    <Checkbox key={task.id} id={task.id} description={task.description} marked={task.marked} onFinishTask={handleFinishTask} onRemoveTask={handleRemoveTask} />
                  );
                })}
              </div>
              <div className={tasks.length === 0 ? styles.empty : `${styles.empty} ${styles.displayNone}` }>
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
