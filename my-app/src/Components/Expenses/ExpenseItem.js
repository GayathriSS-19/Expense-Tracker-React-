import './ExpenseItem.css'
import React,{useState} from 'react'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

export default function ExpenseItem(props) {
  const[newTitle,setNewTitle] =useState("Hi")     //newTitle variable created for each and every component
  // let title = props.title
  const[title,setTitle] =useState(props.title) 
    //title variable created for each and every component
    console.log("ExpenseItem");
    console.log(props.title,props.date,props.amount);
    const clickHandler = () =>
     {
      //  title="New Title..";
  //     console.log(title);
      // setTitle("New Title..")
      setTitle(newTitle)
     }

     const changeHandler =(event) =>{   {/*event contains all the info regarding a particular event*/}
        setNewTitle(event.target.value)
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
      {/* <input type="text" value={newTitle}/>   Whatever changes you make to input will always be removed and kept it as "HI" itself */}
      <input type="text" value={newTitle} onChange={changeHandler}/>  
      <button onClick={clickHandler}> Change Title</button>
    </Card>
  )
}
