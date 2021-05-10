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
        }
        catch(error){
            console.log(error);
        }
        
       
    } , [])
    const SaveExpenseData =  (ExpenseData) =>{
        
        console.log(ExpenseData)
        setAllExpense(prev => { 
            localStorage.setItem('expenses',JSON.stringify([ExpenseData, ...allExpense ]));
            return [ExpenseData, ...allExpense ]})
        

    }
    let x = ['f' , 'u' , 'c']
    let y = x
    y.pop()
    console.log(x)
    const DeleteEntry = (key) => {
       
        console.log(key)
        // let  = new allExpense
        const allExpense2 = allExpense.filter((element) => element.key !== key)
        // allExpense2.forEach( (element , index) => {
        //     console.log( index)
        //     if (element.key === key ){
        //         allExpense2.splice(index,1)
        //         console.log(allExpense2)
                
        //     }
        // })
        setAllExpense(allExpense2)
        localStorage.setItem('expenses',JSON.stringify(allExpense2))
    }
    
    return (
        <div>
            <ExpenseForm onSaveExpenseData = {SaveExpenseData}/>
            <ExpenseItems data = {allExpense} onDelete = {DeleteEntry} />
            
        </div>
    )
}

export default Expense
