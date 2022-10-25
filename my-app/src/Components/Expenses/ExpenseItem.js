import './ExpenseItem.css'
import React,{useState} from 'react'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

export default function ExpenseItem(props) {

  // let title = props.title
  const[title,setTitle] =useState(props.title)
   const clickHandler = () =>
     {
      //  title="New Title..";
  //     console.log(title);
      setTitle("New Title..")
     }
    // let title=props.title;
    // const month=props.date.toLocaleString('en-US',{month:'long'})
    // const year=props.date.getFullYear()
    // const day=props.date.toLocaleString('en-US',{day:'2-digit'})
  return (
    <Card className="expense-item">
      {/* <div>{props.date}</div>  we are getting date obj so can't do like this*/ }
      {/* <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div> */}
 
      <ExpenseDate date = {props.date}/>
      <div className='expense-item__description'>
        <h2>{ title }</h2>
        { /* <h2>title</h2> */}
        <div className='expense-item__price'>${ props.amount }</div>
      </div>
      <button onClick={clickHandler}> Change Title</button>
    </Card>
  )
}
