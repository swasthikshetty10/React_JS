import React ,{useState} from 'react'
import './Todolist.css'

function Todolist(props)  {
    return (

        <div className = "Todoitem">
            <div className = "text">
            {props.text}
            </div>

            <div >
            <button> Edit </button>
            </div>

            <input type="checkbox" defaultChecked={console.log("tick!")} onChange={console.log("f!")} />
            <div>
                <button> Delete </button>
            </div>
        </div>
    )
}

export default Todolist
