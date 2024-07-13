import React from "react";
import { useState,useEffect } from "react";

function Counter(){
   const[count,setcount]=useState(0);
   const[calc,newcal]=useState(0);

   useEffect(()=>{
    newcal(()=>(count+5),[count])
   })

   return(
    <>
    <h1>{count}</h1>
    <button onClick={()=>setcount((c)=>c+1)}>click</button>
    <h2>{calc}</h2>
    </>
   )
}
export default Counter;










