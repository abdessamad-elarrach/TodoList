import React,{useState} from "react";



const Todos = ({text,setTodoslist,id,completed})=>{
    const [edit,setEdit] = useState(text)
    const [styleedit,setStyleedit]=useState("edit_container")
    function setEdit_handeler(e){
        setEdit(e.target.value)
    }
    function deletefromlist(){
        setTodoslist(e => e.filter(c => c.key !== id))
    }
    function checkelement(){
        setTodoslist(e => e.map(c => c.key === id ? {...c,completed : true}:c))
    }
    function edit_element(){
        if(edit){
            setTodoslist(e=> e.map(c=> c.key ===id ? {...c,text:edit}:c))
            setStyleedit("edit_container")
        }
    }
    function edit_element_apear(){
        setStyleedit("edit_container apear")
    }
    return(
            <div className={completed ? "comdiv":""}>
                <h4>{text}</h4><i className="fas fa-edit" onClick={edit_element_apear}></i><i className="fas fa-check" onClick={checkelement}></i><i className="fas fa-trash" onClick={deletefromlist}></i>
                <div className={styleedit}>
                    <input type="text" onChange={setEdit_handeler} value={edit}/><button onClick={edit_element}>Submit</button>
                </div>
            </div>
    );
}
export default Todos