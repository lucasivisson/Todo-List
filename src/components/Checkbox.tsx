import { Trash } from 'phosphor-react';
import styles from './Checkbox.module.css';

type CheckboxType = {
  id: number,
  description: string,
  marked: boolean,
  onFinishTask: (id: number) => void;
  onRemoveTask: (id: number) => void;
}

export function Checkbox({id, description, marked, onFinishTask, onRemoveTask}: CheckboxType) {
  function handleFinishTask() {
    onFinishTask(id);
  }

  function handleRemoveTask() {
    onRemoveTask(id);
  }

  return (
    <div className={styles.checkboxBox}>
      <div className={styles.checkboxInputLabel}>
        <input type="checkbox" name={"checkbox-" + id} className={styles.checkboxInput} onChange={handleFinishTask}/>
        <label htmlFor={"checkbox-" + id} className={marked ? styles.checkboxLabel : undefined}>{description}</label>
      </div>
      <button onClick={handleRemoveTask}><Trash/></button>
    </div>
  )
}