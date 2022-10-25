import './ExpenseItem.css'
import React from 'react'

export default function ExpenseItem(props) {
    // let title=props.title;
    const month=props.date.toLocaleString('en-US',{month:'long'})
    const year=props.date.getFullYear()
    const day=props.date.toLocaleString('en-US',{day:'2-digit'})
  return (
    <div className="expense-item">
      {/* <div>{props.date}</div>  we are getting date obj so can't do like this*/ }
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className='expense-item__description'>
        <h2>{ props.title }</h2>
        { /* <h2>title</h2> */}
        <div className='expense-item__price'>${ props.amount }</div>
      </div>
    </div>
  )
}
