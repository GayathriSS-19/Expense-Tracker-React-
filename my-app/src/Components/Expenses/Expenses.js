import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'

function Expenses(props) {
  console.log("EXpenses.js")
  console.log(props.item)
  return (
    <Card className='expenses'>
      {/* <ExpenseItem date={props.item[0].date} title={props.item[0].title} amount={props.item[0].amount}/>
      <ExpenseItem date={props.item[1].date} title={props.item[1].title} amount={props.item[1].amount}/>
      <ExpenseItem date={props.item[2].date} title={props.item[2].title} amount={props.item[2].amount}/>
      <ExpenseItem date={props.item[3].date} title={props.item[3].title} amount={props.item[3].amount}/> */}
             {/*curly braces on as we are using js method "map()"*/}
    {props.item.map( 
        expense => (
              <ExpenseItem date={expense.date} title={expense.title} amount={expense.amount} key={expense.id}/>
              
        )
     )}
    </Card>
  )
}

export default Expenses
