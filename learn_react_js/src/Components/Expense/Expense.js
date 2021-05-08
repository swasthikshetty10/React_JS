import React , {useState , useEffect}from 'react'
import ExpenseForm from "./ExpenseForm"
import ExpenseItems from "./ExpenseItems" 
function Expense() {
    const [allExpense , setAllExpense] = useState([])
    
    useEffect( () => {
        try {
            const localdata = Array(JSON.parse(localStorage.getItem('expenses')));
            console.log(localdata[0])
            localdata[0].forEach( (element  , index) => {
                localdata[0][index] = {...element , date : new Date(element.date) }
            });
            setAllExpense(localdata[0])
        // if(localdata[0].length > 0){    
        //     setAllExpense(localdata[0]);
        // }
        }
        catch(error){
            console.log(error);
        }
        
       
    } , [])
    const SaveExpenseData =  (ExpenseData) =>{
        
        console.log(ExpenseData)
        setAllExpense( [ExpenseData, ...allExpense ])
        localStorage.setItem('expenses',JSON.stringify(allExpense));

    }
    
    return (
        <div>
            <ExpenseForm onSaveExpenseData = {SaveExpenseData}/>
            <ExpenseItems data = {allExpense} />
            
        </div>
    )
}

export default Expense
