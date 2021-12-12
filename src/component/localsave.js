import React from "react";

const Localsave = ({todoslist})=>{
    function savelocal(){
        localStorage.setItem("todos",JSON.stringify(todoslist))
    }
        

    return(
        <div className="SAVE">
            <button onClick={savelocal}>SAVE</button>
        </div>
    )
}
export default Localsave;