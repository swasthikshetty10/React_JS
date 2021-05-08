import React from 'react'
import "./ExpenseCard.css"
function ExpenseCard(props) {
    // console.log(props);
    let d = props.data.date
  
        
        let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
        let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    
    try {
        return (
            <div className = {"ExpenseCard " + props.data.key}>
                <div className = "ExpenseDate">
                 <p> {`${da}-${mo}-${ye}` } </p> 
                </div>
                    
                <div className = "ExpenseTitle" >
                    <p>{props.data.title}</p>
                </div>
                <div className = "ExpenseAmount" >
                    <p>{props.data.amount} Rs</p>
                </div>
            </div>
        )
    } catch (error) {
        console.log(error);
        return (
            <div ClassName = "ExpenseCard">
                {/* <div className = "ExpenseDate">
                    <p>{props.data.date}</p>
                    <p>{props.data.date}</p>
                </div>
                    
                <div className = "ExpenseTitle" >
    
                </div> */}
                
            </div>
        )
    }
    
}

export default ExpenseCard
