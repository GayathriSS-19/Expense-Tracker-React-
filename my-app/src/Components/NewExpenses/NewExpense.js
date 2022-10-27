import React from 'react'
import Expenseform from './Expenseform'
import "./NewExpense.css"

function NewExpense(props) {
    const saveExpenseDateHandler = (enteredExpenseData) =>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData);
        console.log(expenseData)
    }
    
  return (
    <div className='new-expense'>
      <Expenseform onSaveExpenseData={saveExpenseDateHandler}/>  {/*sending function via props to child*/}
    </div>
  )
}

export default NewExpense
