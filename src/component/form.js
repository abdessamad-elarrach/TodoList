import React,{useState,useEffect} from "react";
import Todos from "./todos";
import Delete from "./delete";
import Localsave from "./localsave";

const Form = ()=>{
    const localtodos = JSON.parse(localStorage.getItem("todos"))    
    const [inputvalue,setInputvalue] = useState("")
    const [todoslist,setTodoslist] = useState([])
    const [options,setOptions] = useState("")
    useEffect(()=>{
        if(localtodos){setTodoslist(localtodos)}
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    

    function addtolist(){
        if(inputvalue){
            setTodoslist([...todoslist,{text:inputvalue,completed:false,key:Math.random()}])
            setInputvalue("")
        }
    }
    function the_rander(e){
        return <Todos  text={e.text} key={e.key} id={e.key} setTodoslist={setTodoslist} completed={e.completed}/>
    }
    function option_handeler(e){
        setOptions(e.target.value)
    }
    function  filter (e){
        switch(options){
            case "completed":
                return   e.completed ? the_rander(e):null
            case "incompleted":
                return  e.completed ? null:the_rander(e)
            default:
                return  the_rander(e)
            }
    }
    return(
        <div>
            <form action="">
             <div>
                 <input type="text" maxLength="40" value={inputvalue} onChange={((e)=> setInputvalue(e.target.value))}/>
                 <i className="far fa-plus-square" onClick={addtolist}></i>
             </div>
                 <select name="" id="" onChange={option_handeler}>
                     <option value="All">All</option>
                     <option value="completed">completed</option>
                     <option value="incompleted">incompleted</option>
                 </select>
            </form>
            <div className="todos">
                {
                    todoslist.map(e => filter(e))
                }        
            </div>
            <Delete setTodoslist={setTodoslist}/>
            <Localsave todoslist={todoslist}/>
        </div>
    );
}
export default Form;