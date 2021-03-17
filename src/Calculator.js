import React, { useEffect, useState } from 'react';
import styles from './style.module.css';

export default function Calculator() {
const [value1, setValue1] = useState('');
const [value2, setValue2] = useState('');
const [operation, setOperation] = useState('+');
const [result, setResult] = useState();

const clearInputs = () => {
  setValue1('');
  setValue2('');
  setOperation('+');
}

useEffect(()=>{
  switch (operation) {
    case '+':
      setResult(Number(value1) + Number(value2));
      break;
    case '-':
      setResult(value1 - value2);
      break;
    case '*':
      setResult(value1 * value2);
      break;
    case '/':
      setResult((value1 / value2).toFixed(2));
      break;
    default:
      setResult(null);
  }
}, [operation, value1, value2])

  return (
    <>
    <header>CALCULATOR</header>
    <div className={styles.container}>
      <div className={styles.inputFields}>
        <input type="number" value={value1} placeholder="Eg: 1" autoComplete="off"
        onChange={(event)=>setValue1(event.target.value)} />
        <label htmlFor="">{operation}</label>
        <input type="number" value={value2} placeholder="Eg: 2" autoComplete="off"
        onChange={(event)=>setValue2(event.target.value)} />
      </div>
      <div className={styles.buttons}>
        <button className={styles.btn} onClick={()=>setOperation('+')}>+</button>
        <button className={styles.btn} onClick={()=>setOperation('-')}>-</button>
        <button className={styles.btn} onClick={()=>setOperation('*')}>*</button>
        <button className={styles.btn} onClick={()=>setOperation('/')}>/</button>
      </div>
      <div className={styles.lowerSection}>
        <button className={styles.clearBtn} onClick={clearInputs} >Clear</button>
        <div className={styles.result}>Result: {result}</div>
      </div>
    </div>
    </>
  )
}
