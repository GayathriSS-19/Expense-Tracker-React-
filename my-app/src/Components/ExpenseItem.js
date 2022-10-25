import './ExpenseItem.css'
import React from 'react'

export default function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 12th 2022</div>
      <div className='expense-item__description'>
        <h2>Car Insurance</h2>
        <div className='expense-item__price'>$200</div>
      </div>
    </div>
  )
}
