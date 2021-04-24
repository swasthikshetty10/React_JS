import React from 'react'
import ExpenseCard from './ExpenseCard'
function ExpenseItems(props) {
    return (
        <div>
            {  props.data.map(items => <ExpenseCard data = {items}/>) }
          
        </div>
    )
}

export default ExpenseItems
