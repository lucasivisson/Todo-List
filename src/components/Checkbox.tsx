import { Trash } from 'phosphor-react';
import styles from './Checkbox.module.css';

type CheckboxType = {
  numberName: string,
  body: string
}

export function Checkbox({numberName, body}: CheckboxType) {
  return (
    <div className={styles.checkboxBox}>
      <div className={styles.checkboxInputLabel}>
        <input type="checkbox" name={"checkbox-" + numberName} className={styles.checkboxInput}/>
        <label htmlFor={"checkbox-" + numberName}>{body}</label>
      </div>
      <button><Trash/></button>
    </div>
  )
}