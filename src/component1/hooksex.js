import React from "react";
import { useState } from "react";

function Hooks_ex(){
    const[count,setcount]=useState(0);
    

    return(
    <>
    <button onClick={()=>{setcount(count+1)}}>Click to increment</button> <br></br>
    
    <button onClick={()=>{setcount(count-1)}}>Click to decrement</button> <br></br>

    <button onClick={()=>{setcount(0)}}>Click to reset</button> <br></br>
    <h2>{count}</h2>
    
    </>
    )

}
export default Hooks_ex;