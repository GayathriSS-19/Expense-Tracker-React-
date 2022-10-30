import React,{useState} from 'react'
import "./Expenseform.css"


function Expenseform(props) {
    const [enteredTitle,setEnteredTitle] =useState("")
    const [enteredAmount,setEnteredAmount] =useState("")
    const [enteredDate,setEnteredDate] =useState("")
    const titleChangeHandler = (event) =>{
        //  console.log(event.target.value)
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value)
    }
    const submitHandler=(event) =>{
        event.preventDefault();
        
        //send this object to App.js (ExpenseForm->NewExpenses->App)
        const expenseData={         //Two-way Binding
            title:enteredTitle,
            amount:+enteredAmount,
            // date:enteredDate
            date :new Date(document.getElementById('d').value)
            
        }

        props.onSaveExpenseData(expenseData);   //calling method from parent
        console.log(expenseData)
        setEnteredAmount("")
        setEnteredDate("")
        setEnteredTitle("")      //Two-way Binding
    }
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount}/>
        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input type="date" id="d" onChange={dateChangeHandler} value={enteredDate}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add the Expense</button>
      </div>
      {/* <ExpenseItem date={enteredDate} amount={enteredAmount} title={enteredTitle}/> */}
    </form>
  )
}

export default Expenseform
