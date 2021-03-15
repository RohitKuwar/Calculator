import React, { useEffect, useState } from 'react';
import styles from './style.module.css';

export default function Calculator() {
const [value1, setValue1] = useState();
const [value2, setValue2] = useState();
const [operation, setOperation] = useState();
const [result, setResult] = useState();

const clearInputs = () => {
  setValue1('');
  setValue2('');
}

useEffect(()=>{
  if(operation === '+'){
    setResult(value1 + value2);
  }
},[operation, value1, value2])

  return (
    <>
    <header>CALCULATOR</header>
    <div className={styles.container}>
      <div className={styles.inputFields}>
        <input type="text" value={value1} onChange={(event)=>event.target.value} />
        <label htmlFor="">{operation}</label>
        <input type="text" value={value2} onChange={(event)=>event.target.value} />
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
