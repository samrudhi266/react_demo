import React from "react";
import { useState } from "react";

function Formevent(){
    const[value,setvalue]=useState("")
function change(e){
    setvalue(e.target.value)
}

return(
    <>
    <form>
        <input type="text" onChange={change}></input>
    </form>
    <h3>{value}</h3>
    </>
)
}

export default Formevent;