import React from "react";

const Delete = ({setTodoslist})=>{
    function clearAll(){
        setTodoslist([])
    }
    function clearChecked(){
        setTodoslist(e=>e.filter(e=>e.completed === false))
    }
    return(
        <div className="delete_buttons">
            <button onClick={clearChecked}>Delete cheked Tasks</button>
            <button onClick={clearAll}>Delete ALL Tasks</button>
        </div>
    );
}
export default Delete;