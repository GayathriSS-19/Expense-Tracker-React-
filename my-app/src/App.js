import React from 'react'
import ExpenseItem from './Components/Expenses/ExpenseItem'
import Expenses from './Components/Expenses/Expenses'
import NewExpense from './Components/NewExpenses/NewExpense'

 const App=() => {      //used arrow function
  let expenses=[
    {
      id:'e1',
      title:'School Fee',
      amount:250,
      date:new Date(2022,10,22)
    },
    {
      id:'e2',
      title:'Books',
      amount:230,
      date:new Date(2022,8,9)
    },
    {
      id:'e3',
      title:'House Rent',
      amount:2500,
      date:new Date(2022,6,7)
    },
    {
      id:'e4',
      title:'Food',
      amount:540,
      date:new Date(2022,4,25)
    },
  ]
  return (
    <div>
      {/* <ExpenseItem date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount}/>
      <ExpenseItem date={expenses[1].date} title={expenses[1].title} amount={expenses[1].amount}/>
      <ExpenseItem date={expenses[2].date} title={expenses[2].title} amount={expenses[2].amount}/>
      <ExpenseItem date={expenses[3].date} title={expenses[3].title} amount={expenses[3].amount}/> */}
      <NewExpense/>
      <Expenses item={expenses}/>

    </div>
  )
}

export default App

