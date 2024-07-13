import React, { useState } from "react";

function Formevent1(){
    const[value,setvalue]=useState("");
    const[result,setresult]=useState("");

    function HandleForm(e){
        e.preventDefault();
        setresult("the user is="+value);
    }
    function Change(e){
        setvalue(e.target.value);
        setresult("")

    }
    return(
        <>
        <form onSubmit={HandleForm}>
            <input onChange={change}></input>
            <button type="submit">Submit</button>
        </form>
        <h2>{result}</h2>
        </>
    )
}
export default Formevent1;